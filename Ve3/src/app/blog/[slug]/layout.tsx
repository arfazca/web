export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 py-10 pb-[calc(3.5rem+5px)]">
      {children}
    </div>
  );
}