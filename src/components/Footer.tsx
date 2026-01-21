import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-black text-slate-600 dark:text-slate-400 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Building2 size={32} />
              <span className="text-xl font-bold tracking-tight">CA MONK</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted source for finance, career guidance, and professional insights for aspiring Chartered Accountants.
            </p>
          </div>
          
          <div>
            <h4 className="text-black dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Categories
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Finance
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Career
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Technology
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Regulations
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Education
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-black dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  All Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  CA Exam Preparation
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Tax Updates
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Industry News
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-black dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-300 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2026 CA Monk Blog. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}