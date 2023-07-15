export const Show = ({ condition, children }) => {
  if (!condition) return null;
  return <>{children}</>;
};
