import {useSession} from "next-auth/react";
import {useRouter} from 'next/router'
import {redirect} from "next/navigation";


function About_us() {
    const {data: session} = useSession();
    const router = useRouter()
    if (!session) {
        router.push('/');
        return;
    }
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>I'm in about us page</h2>
        </div>
    );
}

export default About_us;
