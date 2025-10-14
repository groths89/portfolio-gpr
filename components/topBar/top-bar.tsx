"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileNav } from '@/components/nav/mobile-nav';
import { SearchIcon } from 'lucide-react';

// Utility function to convert path to a display name
const getDisplayTitle = (pathname: string) => {
  if (pathname === '/') return 'C:\\GPR\\ARCHIVE\\HOME.CMD';
  if (pathname.startsWith('/projects')) return 'C:\\GPR\\ARCHIVE\\PROJECTS.DIR';
  if (pathname.startsWith('/build')) return 'C:\\GPR\\DATA\\BUILD_LOG.FILE';
  if (pathname.startsWith('/learning')) return 'C:\\GPR\\SYSTEM\\LEARN.LOG';
  if (pathname.startsWith('/case-file')) return 'C:\\GPR\\ACCESS\\RESTRICTED.FILE';
  return 'C:\\GPR\\SYSTEM\\STATUS.OK';
};

const TopBar = () => {
  const pathname = usePathname();
  const systemPath = getDisplayTitle(pathname.toLowerCase());

  const topBarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
    "h-16 md:h-20 backdrop-blur-sm",
    "bg-background/95 border-b border-border/80",
    "pl-0",
  );

  return (
    <header className={topBarClasses}>
      <div className="w-full h-full max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">

        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors">
            GPR <span className="hidden" data-clue="online"></span> {/* Branding & Hidden Clue */}
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <div className={cn(
            "text-sm font-mono tracking-wider uppercase px-4 py-1 rounded-sm",
            "bg-card/50 transition-colors duration-300",
            // Neon Glow effect on the location box
            "shadow-md",
            pathname.startsWith('/case-file') 
                ? "text-color-destructive shadow-color-destructive/30" 
                : "text-color-accent shadow-color-accent/30"
          )}>
            {systemPath}
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-shrink-0">
            <button className="text-accent hover:text-foreground transition-colors" aria-label="Search the portfolio">
                <i>
                    <SearchIcon />
                </i>
            </button>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopBar;
// export default TopBar