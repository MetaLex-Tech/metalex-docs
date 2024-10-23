export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

export function Card({
  title,
  link,
  icon,
  children,
}: {
  title: string;
  link: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={link}
      className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
    >
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="text-gray-500 text-sm leading-relaxed">{children}</div>
    </a>
  );
}
