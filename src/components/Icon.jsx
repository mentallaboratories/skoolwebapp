// Icon.jsx
// Renders an SVG <use> sprite icon.
// Usage: <Icon id="icon-home" size={48} className="..." />

export default function Icon({ id, size = 48, className = '' }) {
  return (
    <svg width={size} height={size} className={className} aria-hidden="true">
      <use href={`/icon.svg#${id}`} />
    </svg>
  );
}
