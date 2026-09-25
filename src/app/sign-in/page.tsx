"use client";

import React, {useState} from "react";
import {authClient} from "@/src/lib/auth-client";
import {useRouter} from "next/navigation";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    async function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            fetchOptions: {
                onSuccess: () => {
                    router.push(callbackUrl); // redirect to login page
                },
            },
        });

        if (error) {
            console.error("login error:", error);
            setErrorMessage(error.message ?? "Login error");
            return;
        }

        console.log("login success:", data);
    }

    return (
        <>
            <main className="flex flex-1 flex-col items-center justify-center">
                <div className="flex justify-center p-3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} id="email" name="email" placeholder="Email" required
                               onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} id="password" name="password" placeholder="Password" required
                               onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" className="p-2 cursor-pointer">Login</button>
                    </form>
                </div>
                <div className="flex align-center justify-center p-3 ">
                    <Link href="/sign-up" className="hover:text-primary-foreground"> No Account? You can sign up here.</Link>
                </div>
                <div>
                    {errorMessage && (
                        <>
                            <p className="text-sm text-danger">{errorMessage}</p>
                        </>
                    )}
                </div>
            </main>
        </>
    )
}