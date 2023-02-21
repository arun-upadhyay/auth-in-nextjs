import {useSession, signIn, signOut} from "next-auth/react"
import Header from "../../components/header";

export default function LoginPage() {
    const {data: session} = useSession();
    if (!session) {
        return (
            <div>
                <Header/>
                <p> You are not signed in yet</p>
                <button onClick={() => signIn()}>SignIn
                </button>
            </div>
        );
    } else {
        return (<Header/>);
    }
}
