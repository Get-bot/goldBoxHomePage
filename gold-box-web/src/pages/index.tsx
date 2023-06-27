import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/common/hero";
import SectionTitle from "../components/common/sectionTitle";

import { benefitOne, benefitTwo } from "../components/common/data";
import Benefits from "../components/common/benefits";
import Testimonials from "../components/common/testimonials";
import Cta from "../components/common/cta";
import Faq from "../components/common/faq";
import Video from "../components/common/video";
import PopupWidget from "../components/common/popupWidget";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>골드박스PR</title>
        <meta
          name="description"
          content="골드박스 PR 페이지"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <PopupWidget />
    </>
  );
};

export default Home;
