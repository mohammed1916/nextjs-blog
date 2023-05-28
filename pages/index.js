import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A website for curious developers</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="/">InkFusion!</a>
        </h1>

        <p className={styles.description}>
          Read <Link href="/blogs/dark-mode"><code> Trending page</code></Link>
        </p>

        <div className={styles.grid}>
          <a href="/blogs/dark-mode" className={styles.card}>
            <h3>Dark mode Convertor &rarr;</h3>
            <p>Find in-depth information about viewing websites in dark mode.</p>
          </a>

          <a href="/blogs/node-modules" className={styles.card}>
            <h3>Node.js Modules &rarr;</h3>
            <p>Learn about various was of importing modules in Node.js!</p>
          </a>

          <a
            href="https://medium.com/@curiousabdullah/node-js-basics-8682ec7404b9"
            className={styles.card}
          >
            <h3>Node.js Basics &rarr;</h3>
            <p>Discover and deploy boilerplate example Node.js projects.</p>
          </a>

          <a
            href="https://medium.com/@curiousabdullah/reversing-a-linked-list-669e2bda4678"
            className={styles.card}
          >
            <h3>Reversing a Linked list &rarr;</h3>
            <p>
              Solution for Leetcode problem: 206. Reverse Linked List
            </p>
          </a>
        </div>
      </main>

    </Layout>
  );
}
