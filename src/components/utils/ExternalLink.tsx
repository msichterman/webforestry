import { UnknownObject } from "@/utils/typeUtils";

type Props = {
  children: React.ReactNode;
  to: string;
} & UnknownObject;

const ExternalLink = ({ to, children, ...rest }: Props) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
