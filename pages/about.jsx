import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
            "Who am I you ask? Oh, you didn't ask. Well then, carry on.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
