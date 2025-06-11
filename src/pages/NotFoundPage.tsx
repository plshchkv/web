import Container from "../components/UI/Container"
import Header from "../components/Header"
import { useTranslation } from 'react-i18next';
import Navigate from "../components/UI/Navigate";
import Button from "../components/UI/Button";
import Meta from "../components/Meta";

function NotFound() {
    const { t } = useTranslation();
    return(
    <div className="w-screen h-screen flex items-center justify-center">
        <Meta 
          title="404"
          description={t('notfound')} 
          iconPrefix="icon-park-twotone"
          iconName="error"
        />
        <Header/>
        <Container className="flex flex-col items-center justify-center w-auto h-auto">
          <h1 className="text-4xl">404</h1>
          <p className="mb-2">{t('notfound')}</p>
          <Navigate to="/" trigger={<Button icon="" text={t('back')}/>}/>
        </Container>
      </div>
    ) 
}

export default NotFound