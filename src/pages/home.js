import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

function Home() {
    const {data: session} = useSession();
    const router = useRouter()
    if (!session) {
        router.push('/');
        return;
    }
    return (<div>
        I am in home page
    </div>);
}

export default Home;
