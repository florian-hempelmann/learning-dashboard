import React, {useState} from "react";
import {authClient} from "@/src/lib/auth-client";
import {useRouter, useSearchParams} from "next/navigation";

export default function SignInForm() {
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

    return(
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} id="email" name="email" placeholder="Email" required
                   onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" name="password" placeholder="Password" required
                   onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="p-2 cursor-pointer">Login</button>
        </form>
        <div>
            {errorMessage && (
                <>
                    <p className="text-sm text-danger">{errorMessage}</p>
                </>
            )}
        </div>
    </>
    )
}