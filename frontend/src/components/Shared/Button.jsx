import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  ...rest
}) {
  const Component = as;

  const className = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    rest.className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  );
}
