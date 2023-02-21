import {Fragment} from "react";
import classes from './header.module.css';
import {useSession, signOut} from "next-auth/react"
import Link from "next/link";

function Header() {
    const {data: session} = useSession();
    return (
        <Fragment>
            <section className={classes.header}>
                <ul>
                    {session && (
                        <li>
                            <Link href="/home">Home</Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/about_us">About Us</Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/about_us">
                                <button onClick={() => signOut()}>Logout</button>
                            </Link>
                        </li>
                    )}
                </ul>
            </section>

        </Fragment>
    );
}

export default Header;
