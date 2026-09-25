"use client";

import React, {Suspense} from "react";
import SignUpForm from "@/src/app/components/forms/sign-up-form";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <>
            <main className="flex flex-1 flex-col items-center justify-center">
                <div className="flex justify-center p-3">
                    <Suspense>
                        <SignUpForm/>
                    </Suspense>
                </div>
                <div className="flex align-center justify-center p-3 ">
                    <Link href="/sign-in" className="hover:text-primary-foreground"> Already have an account? You can sign in here.</Link>
                </div>
            </main>
        </>
    )
}