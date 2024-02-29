import Link from "next/link";
import { FC, ReactElement } from "react";

// ==============================================================
type NextLinkProps = {
  href: string | any;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;

  return (
    <Link href={href} className={className} scroll={false}>
      {title}
    </Link>
  );
};

export default NextLink;
