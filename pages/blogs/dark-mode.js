import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function DarkMode() {
    return (
        <Layout>
            <Head>
                <title>Dark Mode</title>
            </Head>
            <h1>Dark Mode</h1>
        </Layout>
    );
}