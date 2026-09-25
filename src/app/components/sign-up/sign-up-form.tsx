import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {authClient} from "@/src/lib/auth-client";

export default function SignUpForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in"); // redirect to login page
                },
            },
        });

        if (error) {
            console.error("sign up error:",error);
            setErrorMessage(error.message ?? "Login error");
            return;
        }

        console.log("registration success:", data);
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input type="name" value={name} id="name" name="name" placeholder="name" required
                   onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} id="email" name="email" placeholder="Email" required
                   onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" name="password" placeholder="Password" required
                   onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="p-2 cursor-pointer">Sign Up</button>
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