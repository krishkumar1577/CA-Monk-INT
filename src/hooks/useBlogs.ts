import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { Blog } from '../types/blog';
import { API_BASE_URL } from '../utils/helpers';

// API function to fetch all blogs from the server
const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
};

// API function to fetch a single blog by ID
const fetchBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
  if (!response.ok) throw new Error('Failed to fetch blog');
  return response.json();
};

// API function to create a new blog post
const createBlog = async (blog: Omit<Blog, 'id'>): Promise<Blog> => {
  const response = await fetch(`${API_BASE_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  });
  if (!response.ok) throw new Error('Failed to create blog');
  return response.json();
};

// Custom hook to fetch all blogs using TanStack Query
// Handles loading, error states, and caching automatically
export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });
};

// Custom hook to fetch a single blog by ID
// Only runs when blogId is provided (enabled flag)
export const useBlog = (blogId: string | null) => {
  return useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  });
};

// Custom hook to create a new blog post
// Automatically invalidates the blogs cache on success
export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      // Refresh the blogs list after successful creation
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};