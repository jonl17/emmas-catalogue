type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props) {
  return (
    <header>
      <h1 className="text-3xl mb-3">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
