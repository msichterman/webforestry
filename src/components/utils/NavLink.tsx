import React, { AnchorHTMLAttributes, cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

type NavLinkProps = React.PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> &
  React.PropsWithChildren<LinkProps> & {
    activeClassName?: string;
    exact?: boolean;
  };

function NavLink({
  href,
  exact = false,
  children,
  className,
  activeClassName,
  ...props
}: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} {...props}>
      <a className={clsx(className, isActive && activeClassName)}>{children}</a>
    </Link>
  );
}

export default NavLink;
