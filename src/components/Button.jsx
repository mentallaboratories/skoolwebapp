// Button.jsx
// Polymorphic button — renders as <button> or <a> depending on `href`.
// variant: 'primary' | 'outline' | 'routine' | 'set' | 'time' | 'symbol'
// Usage:
//   <Button variant="primary" href="./404.html" iconId="icon-link">На 404.html</Button>
//   <Button variant="routine" className="create__mode" iconId="icon-home" iconOnly />

import Icon from './Icon';

export default function Button({
  href,
  variant = 'primary',
  className = '',
  iconId,
  iconSize = 48,
  iconOnly = false,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  // Map variant → CSS class(es)
  const variantClass = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    routine: 'routine-btn',
    set: 'set-btn',
    time: 'time-btn',
    symbol: 'symbols',
  }[variant] ?? 'btn btn-primary';

  const iconClass = {
    primary: '',
    outline: '',
    routine: 'routine-icon',
    set: 'set-icon',
    time: 'time-icon',
    symbol: 'symbol-icon',
  }[variant] ?? '';

  const content = (
    <>
      {iconId && <Icon id={iconId} size={iconOnly ? iconSize : 18} className={iconClass} />}
      {!iconOnly && children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${variantClass} ${className}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`${variantClass} ${className}`} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
