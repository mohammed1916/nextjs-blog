import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function DarkMode() {
    return (
        <>
            <Head>
                <title>Dark Mode</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log(`script loaded correctly, window.FB has been populated`)
                }}></Script>
            <h1>Dark Mode</h1>
            <h2>
                <Link href="/">← Back to Home</Link>
            </h2>
        </>
    );
}