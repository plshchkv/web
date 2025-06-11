import { useLocation } from "react-router";

type MetaProps = {
  title?: string;
  description: string;
  image?: string; // прямой путь к изображению
  iconPrefix?: string; // iconify: logos
  iconName?: string;   // iconify: github-icon
};

const Meta = ({
  title,
  description,
  image,
  iconPrefix,
  iconName,
}: MetaProps) => {
  const location = useLocation();
  const fullTitle = title ? `plshchkv | ${title}` : "plshchkv";
  const baseUrl = "http://plshchkv.ru";
  const fullUrl = `${baseUrl}${location.pathname}`;

  // Используемый URL для картинки и favicon
  const resolvedImage = image
    ? image
    : iconPrefix && iconName
    ? `https://api.iconify.design/${iconPrefix}/${iconName}.svg`
    : "/icon.png";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content="plshchkv" />
      <meta property="og:description" content={description} />
      <meta name="author" content="Plshchkv" />
      <link rel="icon" href={resolvedImage} type="image/svg+xml" />
    </>
  );
};

export default Meta;
