"use client"

import {ThemeSwitcher} from "@/src/app/components/dashboard/buttons/theme-switcher";
import {usePathname} from "next/navigation";
import React from "react";
import {SignOutButton} from "@/src/app/components/dashboard/buttons/sign-out-button";

export function Header() {
    const pathname = usePathname();

    const titles: Record<string, string> = {
        "/dashboard/learning-goals": "My Learning Goals",
        "/dashboard/projects": "My Projects",
        "/dashboard/technologies": "Technologies & Tools",
        "/dashboard/certificates": "My certificates",
    };

    const title = titles[pathname] ?? "Learning Dashboard";

    return (
        <>
        <header>
            <div className='relative flex h-16 items-center justify-center bg-surface pb-2'>
                <h1 className='text-center' >{title}</h1>
            </div>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 space-y-2'>
                <ThemeSwitcher />
                <SignOutButton />
            </div>
            <div className="navbar-transition">
                <div className="navbar-transition__curve" />
            </div>
        </header>
        </>
    )
}