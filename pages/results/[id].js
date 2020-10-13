import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Your Result</title>
      </Head>
      <h1>Your Result</h1>
      <h2>
        <Link href="/personalityTest">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
