"use client";

import * as React from "react";
import Link from "next/link";
import type { ReactElement } from "react";
import { useTheme } from "next-themes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Vercel } from "@aliimam/logos";
import { cn } from "@/lib/utils";
import {
  Bot,
  Box,
  Calendar1,
  ChartNoAxesColumnIncreasing,
  Cpu,
  AArrowUp,
  Globe,
  LayoutGrid,
  PenTool,
  ScanText,
  Shield,
  Smile,
  Sparkle,
  BookText,
  BriefcaseBusiness,
  Code,
  Component,
  Codepen,
  Network,
  Sparkles,
  ScreenShare,
  AppWindow,
  Layers,
  Monitor,
  Moon,
  Sun,
  CirclePlus,
  LogOut,
} from "@aliimam/icons";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";

import Image from "next/image";

const ourStudio: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
    {
      title: "Services",
      href: "/#services",
      icon: <LayoutGrid strokeWidth={2} />,
      description: "Curated remote staffing and digital solutions.",
    },
    {
      title: "Process",
      href: "/#process",
      icon: <Box strokeWidth={2} />,
      description: "Our streamlined methodology for building teams.",
    },
    {
      title: "Why Us",
      href: "/#why-us",
      icon: <Shield strokeWidth={2} />,
      description: "Global talent studio with a boutique approach.",
    },
  ];

const insights: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
    {
      title: "Blog",
      href: "/blog",
      icon: <BookText strokeWidth={2} />,
      description: "Latest insights on distributed teams and remote work.",
    },
  ];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed px-4 py-3 z-50 top-0 w-full transition-all duration-300 ${scrolled ? "bg-white border-b border-beige-200 py-1" : "bg-transparent py-2"
        }`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/tm-logo.png"
              alt="Talent Mucho"
              width={140}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-8 font-medium text-espresso-800 bg-transparent hover:bg-beige-100"
                  )}
                >
                  Our Studio
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-beige-200 shadow-xl">
                  <ul className="grid w-[400px] p-4 gap-3 grid-cols-1 md:w-[500px] md:grid-cols-2">
                    {ourStudio.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        icon={component.icon}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-8 font-medium text-espresso-800 bg-transparent hover:bg-beige-100"
                  )}
                >
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-beige-200 shadow-xl">
                  <ul className="grid w-[400px] p-4 gap-3">
                    {insights.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        icon={component.icon}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-8 font-medium text-espresso-800 bg-transparent hover:bg-beige-100 px-4"
                  )}
                >
                  <Link href="https://calendly.com/talentmucho/30min" target="_blank">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/talentmucho/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-6 rounded-full"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  icon,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: ReactElement;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="hover:bg-transparent">
        <Link href={href}>
          <div className="flex gap-3 items-start rounded-md p-2">
            <div className="border rounded-sm p-2 icon-container">{icon}</div>
            <div className="text-container">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-muted-foreground line-clamp-2 pt-1 text-xs leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>

      <style jsx>{`
        li:hover .icon-container {
          background-color: var(--foreground);
          color: var(--background);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

        li:hover .text-container .text-sm {
          color: var(--foreground); /* Change title color on hover */
          transition: color 0.2s ease;
        }

        li:hover .text-container p {
          color: var(--foreground); /* Change description color on hover */
          transition: color 0.2s ease;
        }
      `}</style>
    </li>
  );
}



const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system";
  onChange?: (theme: "light" | "dark" | "system") => void;
  defaultValue?: "light" | "dark" | "system";
  className?: string;
};

const ThemeSwitcher = ({
  className,
}: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey);
    },
    [setTheme]
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative isolate flex h-7 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            aria-label={label}
            className="relative h-5 w-6 rounded-full"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {isActive && (
              <div className="absolute inset-0 rounded-full bg-secondary" />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-3.5 w-3.5",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
