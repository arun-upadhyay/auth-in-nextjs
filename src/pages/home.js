import {redirectToLogin} from "@/utils/redirectToLogin";
import {Fragment} from "react";
import Header from "../../components/header";

function Home() {
    return (
        <Fragment>
            <Header/>
            <div>
                I am in home page
            </div>
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    return redirectToLogin(context);
}

export default Home;
