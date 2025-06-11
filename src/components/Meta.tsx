import { useEffect } from "react";
import { useLocation } from "react-router";

type MetaProps = {
  title?: string;
  description: string;
  image?: string;
  iconPrefix?: string;
  iconName?: string;
  iconColorVar?: string; 
};

const Meta = ({
  title,
  description,
  image,
  iconPrefix,
  iconName,
  iconColorVar = "--c-icon",
}: MetaProps) => {
  const location = useLocation();
  const fullTitle = title ? `plshchkv | ${title}` : "plshchkv";
  const baseUrl = "http://plshchkv.ru";
  const fullUrl = `${baseUrl}${location.pathname}`;

  function getCSSVar(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Генерация favicon из Iconify
  useEffect(() => {
    async function setFaviconFromIconifyURL() {
      if (!iconPrefix || !iconName) return;

      const icon = `${iconPrefix}:${iconName}`;
      const res = await fetch(`https://api.iconify.design/${icon}.svg`);
      if (!res.ok) return;

      let svgText = await res.text();
      const iconColor = getCSSVar(iconColorVar) || "#00ffff";

      svgText = svgText.replace(/fill=".*?"/g, `fill="${iconColor}"`);

      const blob = new Blob([svgText], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.href = url;
    }

    setFaviconFromIconifyURL();
  }, [iconPrefix, iconName, iconColorVar]);

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
