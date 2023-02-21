import {redirectToLogin} from "@/utils/redirectToLogin";
import {Fragment} from "react";
import Header from "../../components/header";

function About_us() {
    return (
        <Fragment>
            <Header/>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>I'm in about us page</h2>
            </div>
        </Fragment>

    );
}

export async function getServerSideProps(context) {
    return redirectToLogin(context);
}


export default About_us;
