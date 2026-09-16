"use client"

import {ThemeSwitcher} from "@/app/components/theme-switcher";
import {PowerIcon} from "@heroicons/react/24/outline";
import {usePathname} from "next/navigation";

export function Header() {
    const pathname = usePathname();

    const titles: Record<string, string> = {
        "/dashboard/learngoals": "My Learngoals",
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
                <form className='flex rounded-full' >
                    <button className="flex p-2 cursor-pointer rounded-full">
                        <PowerIcon className="w-6 h-6" />
                    </button>
                </form>
            </div>
            <div className="navbar-transition">
                <div className="navbar-transition__curve" />
            </div>
        </header>
        </>
    )
}