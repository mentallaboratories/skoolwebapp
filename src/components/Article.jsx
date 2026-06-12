// Article.jsx
// An explanatory text block with an optional title.
// Usage:
//   <Article title="Що таке index.html?">
//     <p>...</p>
//   </Article>

export default function Article({ title, children, className = '' }) {
  return (
    <div className={`hero-explainer ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
