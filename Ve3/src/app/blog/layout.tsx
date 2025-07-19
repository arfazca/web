export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-none mx-auto px-16 py-20">
        <div className="w-full max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}