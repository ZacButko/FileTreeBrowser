import { PropsWithChildren } from "react";

export const Show = ({
  condition,
  children,
}: PropsWithChildren<{ condition: boolean }>) => {
  if (!condition) return null;
  return <>{children}</>;
};
