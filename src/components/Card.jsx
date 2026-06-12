// Card.jsx
// A generic content card used in grids or lists.
// Props:
//   title     — card heading
//   children  — card body
//   className — extra classes
// Usage: <Card title="IT skills">...</Card>

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`footer-block ${className}`}>
      {title && <h3 className="footer-block__title">{title}</h3>}
      {children}
    </div>
  );
}
