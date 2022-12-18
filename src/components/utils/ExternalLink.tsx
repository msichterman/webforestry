import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

const ExternalLink = ({
  href,
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      className={clsx(className, "cursor-pointer")}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
