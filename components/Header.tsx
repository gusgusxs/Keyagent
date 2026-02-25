import Link from 'next/link';  
import { Menu, Key } from 'lucide-react';  
import { cn } from '@/lib/utils';  
  
export function Header() {  
  return (  
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)]">  
      <div className="container mx-auto flex items-center justify-between px-4 py-4">  
        {/* Logo Section */}  
        <Link href="/" className="flex items-center gap-2 group">  
          <div className="bg-red-600 p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-200">  
            <Key className="h-5 w-5 text-white" />  
          </div>  
          <span className="text-2xl font-black text-gray-900 tracking-tight">KEY</span>  
        </Link>  
  
        {/* Right Actions */}  
        <div className="flex items-center gap-4">  
          <button className="hidden md:block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">  
            เข้าสู่ระบบ  
          </button>  
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-200">  
            <Menu className="h-6 w-6 text-gray-700" />  
            <span className="sr-only">Menu</span>  
          </button>  
        </div>  
      </div>  
    </header>  
  );  
}