import {redirect} from "next/navigation";
import {session} from "@/src/db/schema/auth";

export default function Home() {
    if(!session) {
        redirect("/sign-in")
    }
    redirect("/dashboard");
}
