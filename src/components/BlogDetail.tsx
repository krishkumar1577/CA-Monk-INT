import { Share2, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Blog } from '../types/blog';

interface BlogDetailProps {
  blog: Blog | undefined;
}

// Main blog detail component
// Displays full blog content with cover image, metadata, and social actions
export default function BlogDetail({ blog }: BlogDetailProps) {
  if (!blog) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-slate-400">Select an article to read</p>
      </div>
    );
  }

  return (
    <article className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Cover image with fallback */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800';
          }}
        />
      </div>

      <div className="p-8 md:p-12">
        {/* Blog header section */}
        <header className="mb-10">
          {/* Category and read time metadata */}
          <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">
            <span>{blog.category[0] || 'General'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span>5 min read</span>
          </div>

          {/* Blog title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            {blog.title}
          </h2>

          {/* Share button */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Share2 size={14} />
              Share Article
            </button>
          </div>

          {/* Blog metadata grid: category, read time, date */}
          <div className="grid grid-cols-3 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
            <div className="p-4 text-center border-r border-slate-200 dark:border-slate-800">
              <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Category</span>
              <span className="text-sm font-semibold">{blog.category.join(' & ')}</span>
            </div>
            <div className="p-4 text-center border-r border-slate-200 dark:border-slate-800">
              <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Read Time</span>
              <span className="text-sm font-semibold">5 Mins</span>
            </div>
            <div className="p-4 text-center">
              <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Date</span>
              <span className="text-sm font-semibold">
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Blog content section */}
        <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {blog.description}
          </p>
          <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">
            {blog.content}
          </div>
        </div>

        {/* Footer section: tags, author, social actions */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.category.map((cat, idx) => (
              <span key={idx} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full font-medium">
                #{cat.toLowerCase()}
              </span>
            ))}
          </div>

          {/* Author info and social actions (likes, comments) */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <p className="text-sm font-bold">Written by CA Monk Editorial</p>
                <p className="text-xs text-slate-500">Senior Financial Analyst</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <button className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
                <ThumbsUp size={20} />
                <span className="text-xs font-bold">124</span>
              </button>
              <button className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
                <MessageCircle size={20} />
                <span className="text-xs font-bold">18</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}