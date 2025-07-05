import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import CallToAction from "./components/home/CallToAction";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 antialiased">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </main>
  );
}
