import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="blackbeard • home" description="software developer">
      <Hero />
    </Layout>
  );
};

export default Home;
