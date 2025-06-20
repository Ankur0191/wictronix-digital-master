import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <img src="/icons/logo.png" alt="Wictronix Digital Logo" className="h-8 w-auto" />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Empowering digital transformation with smart IT & marketing solutions.
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                            Made by <Link href="https://github.com/sulaiman-dev" className="font-semibold ml-1">Sulaiman</Link>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div>
                                <h3 className="text-base font-medium text-white">Services</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/services/web-development" className="hover:text-foreground transition-all duration-300">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/seo" className="hover:text-foreground transition-all duration-300">
                                            SEO & Marketing
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/ui-ux" className="hover:text-foreground transition-all duration-300">
                                            UI/UX Design
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/cloud" className="hover:text-foreground transition-all duration-300">
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Social</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="https://facebook.com/wictronix" className="hover:text-foreground transition-all duration-300">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://instagram.com/wictronix" className="hover:text-foreground transition-all duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://twitter.com/wictronix" className="hover:text-foreground transition-all duration-300">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://linkedin.com/company/wictronix" className="hover:text-foreground transition-all duration-300">
                                            LinkedIn
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://github.com/wictronix" className="hover:text-foreground transition-all duration-300">
                                            GitHub
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div>
                                <h3 className="text-base font-medium text-white">Resources</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/support" className="hover:text-foreground transition-all duration-300">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Company</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Wictronix Digital. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="WICTRONIX" />
            </div>
        </footer>
    );
};

export default Footer;
