import Head from 'next/head';

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio | Success!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Form successfully submitted!</main>
    </div>
  );
}
