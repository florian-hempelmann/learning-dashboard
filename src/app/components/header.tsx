"use client"

import {ThemeSwitcher} from "@/src/app/components/theme-switcher";
import {PowerIcon} from "@heroicons/react/24/outline";
import {usePathname} from "next/navigation";
import React from "react";
import {useRouter} from "next/navigation";
import {authClient} from "@/src/lib/auth-client";

export function Header() {
    const router = useRouter();
    const pathname = usePathname();

    async function handleSignOut() {
        const {error} = await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    // console.log("Debug: Reaches Sign Out onSuccess");
                    router.push("/login"); // redirect to login page
                },
            },
        });

        if (error) {
            console.error("logout error:", error);
            return;
        }

        console.log("logout success:");
    }

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
                <button className="flex p-2 cursor-pointer rounded-full" onClick={handleSignOut}>
                    <PowerIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="navbar-transition">
                <div className="navbar-transition__curve" />
            </div>
        </header>
        </>
    )
}