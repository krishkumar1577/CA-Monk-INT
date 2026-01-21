import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Timeline from './components/TimeLine';
import BlogSidebar from './components/BlogSidebar';
import BlogDetail from './components/BlogDetail';
import CreateBlogDialog from './components/CreateBlogDialog';
import LoadingSpinner from './components/LoadingSpinner';
import { useBlogs, useBlog } from './hooks/useBlogs';

// Initialize TanStack Query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      retry: 1, // Only retry failed requests once
    },
  },
});

// Main blog application component
function BlogApp() {
  // State management for UI interactions
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  // Fetch all blogs using custom hook
  const { data: blogs, isLoading, isError, error } = useBlogs();
  
  // Fetch selected blog details
  const { data: selectedBlog } = useBlog(selectedBlogId);

  // Apply dark mode theme to document root
  // Persists theme preference in localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Auto-select first blog on initial load
  useEffect(() => {
    if (blogs && blogs.length > 0 && !selectedBlogId) {
      setSelectedBlogId(blogs[0].id);
    }
  }, [blogs, selectedBlogId]);

  // Loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <div className="text-center p-8 border border-red-200 dark:border-red-900 rounded-lg max-w-md bg-white dark:bg-slate-900">
          <p className="text-red-600 dark:text-red-400 font-bold mb-2">Error loading blogs</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen">
      {/* Navigation bar with theme toggle and create button */}
      <Navbar 
        isDark={isDark}
        setIsDark={setIsDark}
        setIsCreateDialogOpen={setIsCreateDialogOpen}
      />

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section with title and description */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">CA Monk Blog</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and career growth. 
            Expert insights for the modern professional.
          </p>
        </div>

        {/* Two-column grid: sidebar + main blog content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left sidebar: List of all blogs */}
          {blogs && (
            <BlogSidebar 
              blogs={blogs}
              selectedBlogId={selectedBlogId}
              onSelectBlog={setSelectedBlogId}
            />
          )}

          {/* Right content: Selected blog details */}
          <BlogDetail blog={selectedBlog} />
        </div>
      </main>

      {/* Timeline section showing all blogs chronologically */}
      {blogs && blogs.length > 0 && (
        <section className="flex justify-center items-center py-16 bg-white dark:bg-black border border-white/80 dark:border-white/20 rounded-2xl mx-2">
          <Timeline blogs={blogs} />
        </section>
      )}

      {/* Footer component */}
      <Footer />

      {/* Create new blog dialog (modal) */}
      {isCreateDialogOpen && (
        <CreateBlogDialog onClose={() => setIsCreateDialogOpen(false)} />
      )}
    </div>
  );
}

// Root App component with QueryClientProvider
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogApp />
    </QueryClientProvider>
  );
}