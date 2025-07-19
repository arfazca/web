import { TableOfContents } from "@/components/ui/table-of-content"
import { BackButton } from "@/components/ui/blog-back-button"

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackButton />
      <TableOfContents />
      <div className="xl:ml-72">
        {children}
      </div>
    </>
  );
}