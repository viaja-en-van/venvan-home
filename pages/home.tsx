import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/SearchBox";

const Home: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <SearchBox></SearchBox>
        </Layout>
    );
};
export default Home;