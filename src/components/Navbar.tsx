import { Building2, Sun, Moon, PlusCircle } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  setIsCreateDialogOpen: (value: boolean) => void;
}

export default function Navbar({ isDark, setIsDark, setIsCreateDialogOpen }: NavbarProps) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Building2 className="text-3xl font-bold" size={32} />
            <span className="text-xl font-bold tracking-tight">CA MONK</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" href="#">
              Tools
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" href="#">
              Practice
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" href="#">
              Events
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" href="#">
              Job Board
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" href="#">
              Points
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <PlusCircle size={16} />
              New Post
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}