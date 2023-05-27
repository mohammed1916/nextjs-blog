import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function DarkMode() {
    return (
        <>
            <Head>
                <title>Dark Mode</title>
            </Head>
            <h1>Dark Mode</h1>
            <h2>
                <Link href="/">← Back to Home</Link>
            </h2>
        </>
    );
}