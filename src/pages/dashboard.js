import {redirectToLogin} from "@/utils/redirectToLogin";
import {getSession} from "next-auth/react";
import {Fragment} from "react";
import Header from "../../components/header";

export default function DashboardPage() {
    return (
        <Fragment>
            <Header/>
            <div>
                <p>You are in dashboard</p>
            </div>
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    return redirectToLogin(context);
}
