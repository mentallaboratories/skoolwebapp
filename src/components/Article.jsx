// Article.jsx
// An explanatory text block with an optional title.
// Usage:
//   <Article title="Що таке index.html?">
//     <p>...</p>
//   </Article>

export default function Article({ title, paragraphs, children, className = 'container' }) {
  return (
    <div className={`hero-explainer ${className}`}>
      {title && <h3>{title}</h3>}
      {paragraphs && paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {children}
      <p>ffffffffffffffffffffffffffffff</p>
    </div>
  );
}
