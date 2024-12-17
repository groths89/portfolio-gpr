import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL("https://wp.9d8.dev"),
};

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
      <script defer src="/fontawesome/js/brands.js"></script>
      <script defer src="/fontawesome/js/solid.js"></script>
      <script defer src="/fontawesome/js/fontawesome.js"></script>
      </head>
      <body
        className={cn("font-sans antialiased bg-primary-background overflow-hidden", fontSans.variable)}
      >
        <div className={cn("app overflow-visible p-4 w-full h-full m-auto relative")}>
          <div className={cn("app-wrapper bg-[#1e1e28] w-full max-w-[1440px] h-full relative mx-auto h-auto overflow-visible overflow-x-hidden")}>
            <div className={cn("app-container flex flex-nowrap w-full h-screen relative shadow-sm")}>
                <InfoBar>
                  <div className={cn("w-72 fixed")}>
                    <div className={cn("w-full h-full justify-start items-center absolute left-0 top-0 z-50 hidden")}> 
                      <a className={cn("ml-auto pointer-events-auto text-base px-8 py-12")}> 
                        <i className="fas fa-ellipsis-v"></i>
                      </a> 
                    </div>
                    <div className={cn("relative left-0 top-0 z-50 w-full p-6 h-auto bg-gradient-to-br text-center shadow-lg")}> 
                      <div className={cn("w-24 h-24 mx-auto rounded-full relative mb-4")}> 
                        <a data-no-swup="" href="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-1.jpg" className={cn("relative w-full h-full rounded-full flex justify-center outline-none transition-all duration-200 ease-in-out z-0")}> 
                          <img className={cn("absolute w-full h-full object-cover rounded-full z-0")} src="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-1.jpg" alt="avatar" />
                        </a> 
                      </div> 
                      <h5 className="app-name mb-10">
                          <a href="https://arter.bslthemes.com">Artur Carter</a>
                      </h5>
                      <div className="app-sm-text">Front-end Developer<br/> Ui/UX Designer</div>
                    </div>
                    <div className="app-ls-social justify-center flex items-center space-between px-8 h-16 bg-gradient-to-br bg-[#23232D] absolute bottom-0 shadow-sm left-0 w-full z-50"> 
                      <a className="mx-2 text-gray-500 hover:text-shadow-sm hover:text-white" href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a> 
                      <a className="mx-2 text-gray-500 hover:text-shadow-sm hover:text-white" href="https://dribble.com/" target="_blank"><i className="fab fa-dribbble"></i></a> 
                      <a className="mx-2 text-gray-500 hover:text-shadow-sm hover:text-white" href="https://behance.com/" target="_blank"><i className="fab fa-behance"></i></a>
                      <a className="mx-2 text-gray-500 hover:text-shadow-sm hover:text-white" href="https://github.com/" target="_blank"><i className="fab fa-github"></i></a>
                      <a className="mx-2 text-gray-500 hover:text-shadow-sm hover:text-white" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="app-scroll-frame pb-20 bg-[#20202A] overflow-auto h-full"> 
                      <div className="app-table w-full p-6 text-white">
                        <ul>
                          <li><h6>Residence:</h6><span>Canada</span></li>
                          <li><h6>City:</h6><span>Toronto</span></li>
                          <li><h6>Age:</h6><span>26</span></li>
                        </ul>
                        <div className="app-ls-divider bg-gray-500 w-full h-px opacity-30"></div>
                        <div className="app-lang-skills p-30-15"> 
                          <div className="app-lang-skills-item w-1/3 inline-block align-top text-sm text-center mb-4">
                            <div id="circleprog1-1" data-type="circles" data-value="100" className="art-cirkle-progress art-skills-progress">
                              <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}>
                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" stroke-width="7" fill-opacity="0"></path>
                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" stroke-width="7" fill-opacity="0"></path>
                              </svg>
                              <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>100</div>
                            </div> 
                            <h6>French</h6>
                          </div>
                          <div className="app-lang-skills-item w-1/3 inline-block align-top text-sm text-center mb-4">
                            <div id="circleprog1-2" data-type="circles" data-value="90" className="art-cirkle-progress art-skills-progress" style={{position: 'relative'}}>
                              <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}>
                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" stroke-width="7" fill-opacity="0"></path>
                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" stroke-width="7" fill-opacity="0" style={{strokeDasharray: '292.273, 292.273', strokeDashoffset: '29.2273'}}></path>
                              </svg>
                            <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90</div>
                            </div> 
                            <h6>English</h6>
                            </div> 
                            <div className="app-lang-skills-item w-1/3 inline-block align-top text-sm text-center mb-4">
                              <div id="circleprog1-3" data-type="circles" data-value="70" className="art-cirkle-progress art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}>
                                  <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" stroke-width="7" fill-opacity="0"></path>
                                  <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" stroke-width="7" fill-opacity="0" style={{strokeDasharray: '292.273, 292.273', strokeDashoffset: '87.682'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>70</div>
                              </div>
                              <h6>Spanish</h6>
                            </div>
                        </div>
                        <div className="app-ls-divider bg-gray-500 w-full h-px opacity-30"></div>
                        <div className="app-hard-skills p-30-15">
                          <div className="app-hard-skills-item">
                            <div className="app-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                          <div className="art-hard-skills-item">
                            <div className="art-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                          <div className="art-hard-skills-item">
                            <div className="art-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                          <div className="art-hard-skills-item">
                            <div className="art-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                          <div className="art-hard-skills-item">
                            <div className="art-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                          <div className="art-hard-skills-item">
                            <div className="art-skill-heading"> 
                              <h6>html</h6>
                            </div> 
                            <div className="art-line-progress"> 
                              <div id="lineprog2-1" data-type="progress" data-value="90" className="art-skills-progress" style={{position: 'relative'}}>
                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                  <path d="M 0,0.86 L 100,0.86" stroke="#555" stroke-width="1.72" fill-opacity="0" style={{strokeDasharray: '100, 100', strokeDashoffset: '10'}}></path>
                                </svg>
                                <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)'}}>90 %</div>
                              </div>
                            </div> 
                          </div>
                        </div>
                        <div className="art-ls-divider bg-gray-500 w-full h-px opacity-30"></div>
                        <ul className="art-knowledge-list p-15-0"> 
                          <li><i className="fas fa-check"></i>Bootstrap, Materialize</li> 
                          <li><i className="fas fa-check"></i>Stylus, Sass, Less</li> 
                          <li><i className="fas fa-check"></i>Gulp, Webpack, Grunt</li>
                          <li><i className="fas fa-check"></i>GIT knowledge</li>
                        </ul>
                        <div className="art-ls-divider bg-gray-500 w-full h-px opacity-30"></div>
                        <div className="art-links-frame p-15-15"> 
                          <a href="https://drive.google.com/" className="art-link" target="_blank"> Download cv <i className="fas fa-download"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </InfoBar>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                <div className={cn("app-content pl-[290px]")}>  
                  <Main>
                    {children}
                    <Footer />
                  </Main>
                </div>  
                  <div className={cn("absolute top-0 right-0 w-20 h-full")}>
                    <div className={cn("fixed w-20")}>
                      <div className={cn("relative")}>
                        <div className={cn("w-full h-20 flex justify-start items-center absolute top-0 left-0 z-9 shadow-sm bg-gradient-to-br from-gray-700 to-gray-800")}>
                          <a href="">
                            <span></span>
                          </a>
                        </div>
                        <div className={cn("w-48 rotate-90 text-white absolute overflow-hidden top-40 left-full opacity-100 text-uppercase text-sm leading-tight font-medium transition-all duration-400 ease-in-out")}>
                          <a href=""></a>
                        </div>
                        <div className={cn("w-full h-full")}>
                          <Nav />
                        </div>                  
                      </div>                  
                    </div>                  
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

const InfoBar = ({ children, className, id }: InfoBarProps) => {
  return (
    <div className={cn("info-bar bg-[#23232E] w-[290px] min-w-[290px] absolute h-full z-[999] shadow-sm transition-all duration-550 ease-in-out", className)} id={id}>
      {children}
    </div>
  )
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "flex items-center h-full relative",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
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

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>{metadata.description}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Website</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground">
            © <a href="https://9d8.dev">9d8</a>. All rights reserved.
            2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
