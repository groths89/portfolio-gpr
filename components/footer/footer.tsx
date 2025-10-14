"use client";

import type { Metadata } from "next";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { ThemeToggle } from "@/components/theme/theme-toggle";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Software Engineer | Greg Paul Rothstein",
  description:
    "A portfolio website for Greg Paul Rothstein.",
  metadataBase: new URL("https://gregorypaulrothstein.dev"),
};

const Footer = () => {
    const footerClasses = cn(
        "border-t border-border/80, text-secondary-foreground text-sm",
        "w-full max-w-[1440px] mx-auto py-4 px-4 md:px-8"
    );
  return (
    <footer className="w-full">
        <div className={footerClasses}>
                <div className="flex items-center gap-4">
                    <p className="font-mono text-xs md:text-sm tracking-wide">
                        // CASE ARCHIVE: <span className="text-accent font-semibold">GPR.DEV</span> /
                        <span className="text-secondary-foreground ml-1">© {new Date().getFullYear()}</span>
                        <br />
                        <Balancer>{metadata.description}</Balancer>
                    </p>
                </div>
                <div className="flex items-center gap-4 text-xs md:text-sm">
                    {/* Thematic Link to Contact/GitHub */}
                    <Link 
                    className="hover:text-accent transition-colors font-mono tracking-wider"
                    href="/contact"
                    >
                    CONTACT.FILE
                    </Link>
                    
                    {/* Thematic Clue (The final clue position!) */}
                    <span 
                    className="hidden font-mono text-secondary-foreground"
                    data-clue-position="footer"
                    >
                    final
                    </span>
                </div>
        </div>
    </footer>
  );
};

export default Footer;
// export Footer