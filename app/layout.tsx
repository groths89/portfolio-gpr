import { Inter, Fira_Code, Titillium_Web } from 'next/font/google';
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Main } from "@/components/craft";
import TopBar from '@/components/topBar/top-bar';
import Footer from '@/components/footer/footer';

import { mainMenu } from "@/menu.config";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

// 1. Monospace: Fira Code (For system paths and code tags)
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

// 2. Heading: Titillium Web (For major titles and brand)
const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'], // Ensures you have a variety of bold weights
  variable: '--font-heading',
});

// 3. Body: Inter (For main paragraph text)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});



// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ... Font Awesome scripts ... */}
        <script defer src="/fontawesome/js/brands.js"></script>
        <script defer src="/fontawesome/js/solid.js"></script>
        <script defer src="/fontawesome/js/fontawesome.js"></script>
      </head>
      <body
        className={cn("font-sans antialiased overflow-hidden", `${inter.variable} ${firaCode.variable} ${titilliumWeb.variable}`)}
      >
        <div className={cn("app overflow-visible p-4 w-full h-full m-auto relative")}>
          <div className={cn("app-wrapper w-full max-w-[1440px] h-full relative mx-auto h-auto overflow-visible overflow-x-hidden")}>
            <div className={cn("app-container flex flex-nowrap w-full h-screen relative shadow-sm")}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <div className={cn(
                    "fixed right-0 top-0 h-screen w-12 z-40 hidden lg:flex items-center justify-center",
                    "pointer-events-none" // Ensures it doesn't interfere with clicks
                )}>
                    <div className={cn(
                        "absolute h-full w-0.5 bg-color-accent opacity-10" // Subtle vertical line
                    )}></div>

                    {/* The Text Content that will scroll/animate */}
                    <div className={cn(
                        "w-full font-mono text-color-accent text-sm tracking-widest uppercase",
                        "opacity-40",
                        "whitespace-nowrap rotate-90 transform origin-top-left translate-y-[-100%]"
                    )}>
                        <span className="animate-ticker">
                            -- ACTIVE LOGS INITIATED -- AUDIT TRAIL 001 -- ACCESS GRANTED -- SYSTEM STATUS OK -- 
                        </span>
                    </div>
                </div>
                <TopBar /> 
                
                <div className={cn("app-content w-full pt-[80px] overflow-y-auto")}> 
                  <Main>
                    {children}     
                  </Main>
                  <Footer />
                </div>
              </ThemeProvider>
              <Analytics />           
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className=""
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">next-wp starter</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={84}
            height={30.54}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild className="hidden sm:flex">
            <Link href="https://github.com/9d8dev/next-wp">Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

