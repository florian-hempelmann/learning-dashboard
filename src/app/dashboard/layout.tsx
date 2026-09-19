import SideNav from '@/src/app/components/dashboard/sidenav';
import { Metadata } from 'next';
import {auth} from "@/src/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import React from "react";

export const metadata: Metadata = {
    title: {
        template: "%s - Learning Dashboard",
        default: "Learning Dashboard",
    },
    description: "Dashboard contains personal learning growth and is used for learning experience. " +
        "This Dashboard is publicly available on github for recruiter.",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        redirect("/login")
    }
    return (
        <main className="flex flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </main>
    );
}