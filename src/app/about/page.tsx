import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Vortix Enterprise",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn more about our mission, values, and the team behind the vision. We're dedicated to delivering quality content and experiences that matter to you."
      />

      <div className="">
        <AboutSectionOne />
      </div>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
