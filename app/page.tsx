import { About } from "@/components/about";
import { Closing } from "@/components/closing";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Physicians } from "@/components/physicians";
import { Services } from "@/components/services";
import { Visit } from "@/components/visit";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Physicians />
        <About />
        <Visit />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
