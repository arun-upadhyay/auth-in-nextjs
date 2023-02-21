import {useSession, signIn, signOut} from "next-auth/react"
import {useRouter} from 'next/router';

export default function DashboardPage() {
    const {data: session} = useSession();
    const router = useRouter();
    if (!session) {
        router.push("/");
    }
    return (
        <div>
            <p>You are in dashboard</p>
        </div>
    );
}
