// Link.jsx
// Generic anchor wrapper — preserves external / internal behaviour.
// Usage: <Link href="./it.html" external>Visit IT</Link>

export default function Link({
  href,
  external = false,
  className = '',
  style,
  children,
}) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={className} style={style} {...externalProps}>
      {children}
    </a>
  );
}
