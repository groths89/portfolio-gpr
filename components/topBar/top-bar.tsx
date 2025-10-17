"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileNav } from '@/components/nav/mobile-nav';
import { SearchIcon, Shield, Home, User, FolderOpen, Lock } from 'lucide-react';

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
    <div className={topBarClasses}>
      <header className={topBarClasses}>
        <div className="w-full h-full max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Shield className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-bold text-lg neon-text">G. ROTHSTEIN</span>
            </Link>
          </div>
          
          <div className="flex gap-6">
              <Link
                href="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`
                }
              >
                <Home className="h-4 w-4" />
                <span>HQ</span>
              </Link>
              
              <Link
                href="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`
                }
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              
              <Link
                href="/cases"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`
                }
              >
                <FolderOpen className="h-4 w-4" />
                <span>Cases</span>
              </Link>
              
              <Link
                href="/classified"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors hover:text-destructive ${
                    isActive ? "text-destructive" : "text-foreground/70"
                  }`
                }
              >
                <Lock className="h-4 w-4" />
                <span>Classified</span>
              </Link>

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
        </div>
      </header>
      {/* Terminal Header */}
      <div className="mt-20 border-b border-primary/30 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <div className={cn(
              "text-sm font-mono tracking-wider uppercase px-4 py-1 rounded-sm",
              "transition-colors duration-300",
              pathname.startsWith('/case-file') 
                  ? "text-color-destructive shadow-color-destructive/30" 
                  : "text-color-accent shadow-color-accent/30"
              )}>
              {systemPath}
              </div>
          </p>
        </div>
      </div>      
    </div>
  );
};

export default TopBar;
// export default TopBar