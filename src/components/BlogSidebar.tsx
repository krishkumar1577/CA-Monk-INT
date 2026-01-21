import type { Blog } from '../types/blog';
import { formatDate } from '../utils/helpers';

interface BlogSidebarProps {
  blogs: Blog[];
  selectedBlogId: string | null;
  onSelectBlog: (id: string) => void;
}

// Sidebar component displaying list of all blog posts
// Allows users to click and select a blog to view in detail
export default function BlogSidebar({ blogs, selectedBlogId, onSelectBlog }: BlogSidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold uppercase tracking-wider">Latest Articles</h2>
        <span className="text-xs text-slate-400 font-mono">UPDATED 2H AGO</span>
      </div>

      <div className="space-y-4 sidebar-scroll max-h-[1200px] overflow-y-auto pr-2">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            onClick={() => onSelectBlog(blog.id)}
            className={`p-5 border rounded-xl transition-all cursor-pointer group ${
              selectedBlogId === blog.id
                ? 'border-black dark:border-white'
                : 'border-slate-200 dark:border-slate-800 hover:border-black dark:hover:border-white'
            }`}
          >
            {/* Blog metadata: category and date */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-black dark:group-hover:text-white">
                {blog.category[0] || 'General'}
              </span>
              <span className="text-[10px] text-slate-400">{formatDate(blog.date)}</span>
            </div>

            {/* Blog title and description preview */}
            <h3 className="text-lg font-bold mb-2 group-hover:underline">{blog.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {blog.description}
            </p>

            {/* Badge to highlight featured posts */}
            <div className="mt-4 flex gap-2">
              <span className="text-[9px] px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded uppercase font-bold">
                Featured
              </span>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}