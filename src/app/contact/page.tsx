import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Vortix Enterprise",
  description: "Contact Page | Vortix Enterprise",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
  <div className="py-10">
      <Contact />
      </div>
    </>
  );
};

export default ContactPage;
