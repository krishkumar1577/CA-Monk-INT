import { Loader2 } from 'lucide-react';

// Simple loading spinner component
// Used to show loading state while fetching data
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}