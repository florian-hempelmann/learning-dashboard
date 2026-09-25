"use client";

import React, {Suspense} from "react";
import Link from "next/link";
import SignInForm from "@/src/app/components/sign-in/sign-in-form";

export default function SignInPage() {
    return (
        <>
            <main className="flex flex-1 flex-col items-center justify-center">
                <div className="flex justify-center p-3">
                    <Suspense>
                        <SignInForm />
                    </Suspense>
                </div>
                <div className="flex align-center justify-center p-3 ">
                    <Link href="/sign-up" className="hover:text-primary-foreground"> No Account? You can sign up here.</Link>
                </div>
            </main>
        </>
    )
}