type VisualImageProps = {
  tone: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

export function VisualImage({ tone, label, className = "", children }: VisualImageProps) {
  return (
    <div className={`visual-image visual-${tone} ${className}`} role="img" aria-label={label ?? "교회 이미지"}>
      {children ? <div className="visual-content">{children}</div> : null}
    </div>
  );
}
