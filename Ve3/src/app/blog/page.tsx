import BlurFade from "@/components/ui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Thoughts, stories and ideas.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Group posts by year
  const postsByYear = posts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .reduce((acc, post) => {
      const year = new Date(post.metadata.publishedAt).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {} as Record<number, typeof posts>);

  return (
    <>
      {/* Header Section */}
      <section className="gap-0 mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-2 tracking-tighter">Blog</h1>
          <p className="text-muted-foreground">Thoughts, stories and ideas.</p>
        </BlurFade>
      </section>

      {/* Posts by Year */}
      {Object.entries(postsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearPosts], index) => (
          <section key={year} className="mb-8">
            {/* Year Header */}
            <BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.2}>
              <h2 className="font-normal text-muted-foreground text-sm mb-6">
                {year}
              </h2>
            </BlurFade>
            
            {/* Posts List */}
            <ul className="grid gap-6">
              {yearPosts.map((post, postIndex) => (
                <li key={post.slug}>
                  <BlurFade delay={BLUR_FADE_DELAY * 3 + index * 0.2 + postIndex * 0.05}>
                    <Link
                      className="flex group hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors"
                      href={`/blog/${post.slug}`}
                    >
                      {/* Desktop layout: title...date (640px and larger) */}
                      <div className="hidden sm:flex items-center justify-between w-full">
                        <div className="flex items-center gap-4 flex-1">
                          <p className="tracking-tight group-hover:text-primary transition-colors">
                            {post.metadata.title}
                          </p>
                          <div className="flex-1 border-b border-dotted border-muted-foreground/30"></div>
                          <p className="text-xs text-muted-foreground">
                            {new Intl.DateTimeFormat('en-US', { 
                              month: 'long', 
                              day: 'numeric' 
                            }).format(new Date(post.metadata.publishedAt))}
                          </p>
                        </div>
                      </div>
                      
                      {/* Mobile layout: title on top, date below (below 640px) */}
                      <div className="flex sm:hidden flex-col w-full">
                        <p className="tracking-tight group-hover:text-primary transition-colors mb-1">
                          {post.metadata.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Intl.DateTimeFormat('en-US', { 
                            month: 'long', 
                            day: 'numeric' 
                          }).format(new Date(post.metadata.publishedAt))}
                        </p>
                      </div>
                    </Link>
                  </BlurFade>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}