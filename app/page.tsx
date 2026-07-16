import Hero from "@/components/home/Hero";
import PropertyCategories from "@/components/home/PropertyCategories";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSteven from "@/components/home/AboutSteven";
import Transparency from "@/components/home/Transparency";
import CallToAction from "@/components/home/CallToAction";


export default function HomePage() {
  return (

    <main>

      <Hero />


      {/* PROPERTY CATEGORY SECTION */}
      <section id="categories">

        <PropertyCategories />

      </section>


      {/* BROWSE / CALCULATOR LANDING */}
      <section id="properties">

        <FeaturedProperties />

      </section>


      <WhyChooseUs />


      {/* CONTACT STEVEN LANDING */}
      <section id="contact-steven">

        <AboutSteven />

      </section>


      <Transparency />


      <CallToAction />


    </main>

  );
}