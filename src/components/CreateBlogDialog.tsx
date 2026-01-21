import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCreateBlog } from '../hooks/useBlogs';
import { Button } from "@/components/ui/button"

interface CreateBlogDialogProps {
  onClose: () => void;
}

// Dialog component for creating new blog posts
// Uses TanStack Query mutation to handle API request
export default function CreateBlogDialog({ onClose }: CreateBlogDialogProps) {
  const mutation = useCreateBlog();
  
  // Form state management
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: '',
    content: '',
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Transform form data before sending to API
    mutation.mutate({
      ...formData,
      category: formData.category.split(',').map(c => c.trim()).filter(Boolean),
      date: new Date().toISOString(),
    }, {
      onSuccess: onClose, // Close dialog on successful creation
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/30 dark:bg-white/10" onClick={onClose} />
      
      {/* Dialog content */}
      <div className="relative z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
        {/* Dialog header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create New Blog</h2>
          <Button onClick={onClose} aria-label="Close dialog" variant="ghost" size="icon">
            <X size={24} />
          </Button>
        </div>
        
        {/* Blog creation form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title input */}
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              required
            />
          </div>

          {/* Categories input (comma-separated) */}
          <div>
            <label className="block text-sm font-medium mb-2">Categories (comma-separated)</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., FINANCE, TECH"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              required
            />
          </div>

          {/* Description textarea */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              rows={3}
              required
            />
          </div>

          {/* Cover image URL input */}
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image URL</label>
            <input
              type="url"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              required
            />
          </div>

          {/* Content textarea */}
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              rows={10}
              required
            />
          </div>
          
          {/* Form action buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
          </div>

          {/* Error message display */}
          {mutation.isError && (
            <p className="text-sm text-red-600">Error: {mutation.error.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}