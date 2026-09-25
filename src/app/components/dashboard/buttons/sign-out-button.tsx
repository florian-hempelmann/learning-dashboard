import {PowerIcon} from "@heroicons/react/24/outline";
import React from "react";
import {usePathname, useRouter} from "next/navigation";
import {authClient} from "@/src/lib/auth-client";

export function SignOutButton() {
    const router = useRouter();

    async function handleSignOut() {
        const {error} = await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    // console.log("Debug: Reaches Sign Out onSuccess");
                    router.push("/sign-in"); // redirect to login page
                },
            },
        });

        if (error) {
            console.error("logout error:", error);
            return;
        }

        console.log("logout success:");
    }

    return (
        <button className="flex p-2 cursor-pointer hover:text-primary-foreground bg-surface rounded-full"
                onClick={handleSignOut}>
            <PowerIcon className="w-6 h-6"/>
        </button>
    )
}