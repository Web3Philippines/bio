import { linkType } from "../data/links";

function LinkButton({ id, title, url, icon }: linkType) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {icon} {title}
    </a>
  );
}

export default LinkButton;
