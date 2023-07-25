import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real State</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <HeroSection />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <FooterSection
          houseLine="/houseline2.svg"
          socialMediaLogo="/social-media-logo5.svg"
          socialMediaLogo1="/social-media-logo6.svg"
          socialMediaLogo2="/social-media-logo7.svg"
          socialMediaLogo3="/social-media-logo8.svg"
          socialMediaLogo4="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
