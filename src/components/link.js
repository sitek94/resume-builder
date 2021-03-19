export default function Link({ to, children }) {
  return (
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}
