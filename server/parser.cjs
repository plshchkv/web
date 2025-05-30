const puppeteer = require('puppeteer');
const fs = require('fs');

(async function () {
    const cookiesPath = 'server/cookies.json';
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    });
    const page = await browser.newPage();

    if (fs.existsSync(cookiesPath)) {
        const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf8'));
        await page.setCookie(...cookies);
        console.log('Куки загружены.');
    }

    await page.goto('https://web.vk.me/channels/-223261415?tab=all&sferum=true');

    if (await page.evaluate(() => document.body.textContent.includes('Профиль Сферума'))) {
        console.log('Необходимо выполнить вход.');
        await page.waitForFunction(() =>
            document.body.textContent.includes('Расписание уроков 5-11 классы'),
            { timeout: 90000 }
        );
        const cookies = await page.cookies();
        fs.writeFileSync(cookiesPath, JSON.stringify(cookies, null, 2));
        console.log('Куки сохранены.');
    } else {
        console.log('Пользователь уже авторизован.');
    }

    try {
        const imageElements = await page.$$('.PhotoItem__img');
        const images = await Promise.all(
            imageElements.slice(0, 3).map(el =>
                page.evaluate(img => {
                    const src = img.src;
                    return src.replace(/&cs=\d+x\d+$/, '&cs=1280x720');
                }, el)
            )
        );

        console.log('Обработанные ссылки:', images);

        const dateElement = await page.waitForSelector('.PostText', { timeout: 10000 });
        const date = await page.evaluate(el => {
            const text = el.textContent;
            const match = text.replace('Расписание на завтра, ', '');
            return match;
        }, dateElement);

        console.log('Дата:', date);

        let existingData = [];
        const outputPath = 'server/output.json';

        if (fs.existsSync(outputPath)) {
            try {
                const fileContent = fs.readFileSync(outputPath, 'utf8');
                existingData = JSON.parse(fileContent || '[]');
                if (!Array.isArray(existingData)) {
                    console.warn('Файл output.json не содержит массив. Перезаписываем.');
                    existingData = [];
                }
            } catch (error) {
                console.error('Ошибка при чтении или парсинге output.json:', error.message);
                existingData = [];
            }
        }

        const isDuplicate = existingData.some(entry => entry.date === date);
        if (isDuplicate) {
            console.log(`Запись с датой "${date}" уже существует. Пропускаем добавление.`);
            await browser.close();
        } else {
            const id = existingData.length > 0 ? Math.max(...existingData.map(entry => entry.id)) + 1 : 1;
            const newData = { id, images, date };
            existingData.push(newData);

            try {
                fs.writeFileSync(outputPath, JSON.stringify(existingData, null, 2));
                console.log('Данные добавлены в output.json');
                await browser.close();
            } catch (error) {
                console.error('Ошибка при записи в output.json:', error.message);
                await browser.close();
            }
        }
    } catch (error) {
        console.log(error);
    }

    await new Promise(r => setTimeout(r, 10000));
    await browser.close();
})();