import { Link, LinkProps, useLocation } from "react-router-dom";

export interface Props extends LinkProps {}

export default function NavLink(props: Props) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className={`
        flex items-center gap-1.5 font-medium text-muted-foreground 
        hover:text-foreground data-[current=true]:text-foreground
      `}
      {...props}
    />
  );
}
