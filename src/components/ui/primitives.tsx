import { ArrowUpRight } from "lucide-react";
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={"container " + className}>{children}</div>;
}
export function Button({
  children,
  href = "#demo",
  secondary = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      className={
        "button " +
        (secondary ? "button-secondary " : "button-primary ") +
        className
      }
      href={href}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge">
      <span className="dot" />
      {children}
    </span>
  );
}
export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span />
        {label}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
