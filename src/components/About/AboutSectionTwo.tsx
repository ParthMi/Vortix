import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SingleBrand = ({ brand }: { brand: any }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center px-3 py-[15px]">
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className="relative h-[150px] w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
        >
          <Image src={"https://www.qassurance.com/wp-content/uploads/QAssurance-logos-4.png"} alt={name} fill className="block object-contain" />
        </a>
      </div>
    </div>
  );
};
const AboutSectionTwo = () => {
  return (<>
    <section className="py-8 md:py-12 lg:py-14">
      <SectionTitle
        title="Our Mission & Values"
        paragraph=""
        center
      />
      <div className="container">
  <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
    {/* Mission Section */}
    <div 
      className="border-b-[10px] border-[#4a6cf7] pb-8"
      data-aos="fade-up"
      data-aos-delay="100" // Delayed by 100ms
    >
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <BsFillRocketTakeoffFill className="text-[#4a6cf7] text-[35px] md:text-[80px]" />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">Our Mission</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Delivering the highest quality, custom made activated carbon solutions for diverse industrial applications.
      </p>
    </div>

    {/* Vision Section */}
    <div 
      className="border-b-[10px] border-[#4a6cf7] pb-8"
      data-aos="fade-up"
      data-aos-delay="200" // Delayed by 200ms
    >
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <RiLightbulbFlashFill className="text-[#4a6cf7] text-[35px] md:text-[80px]" />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">Our Vision</h3>
      <p className="text-gray-500 dark:text-gray-400">
        To become a globally leading developer and supplier of activated carbon, exceeding customer expectations through innovation and a commitment to sustainability.
      </p>
    </div>

    {/* Value Section */}
    <div 
      className="border-b-[10px] border-[#4a6cf7] pb-8"
      data-aos="fade-up"
      data-aos-delay="300" // Delayed by 300ms
    >
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <IoDiamond className="text-[#4a6cf7] text-[35px] md:text-[80px]" />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">Our Value</h3>
      <p className="text-gray-500 dark:text-gray-400">
        We prioritize understanding and fulfilling unique customer needs and we are committed to delivering superior activated carbon solutions.
      </p>
    </div>
  </div>
</div>

    </section>
    <hr></hr>
    <section className="py-8 md:py-12 lg:py-14">
      <SectionTitle
        title="Certificates"
        paragraph=""
        center
      />
      <div className="container grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
        <SingleBrand key={1} brand={"brand"} />
        <SingleBrand key={1} brand={"brand"} />
        <SingleBrand key={1} brand={"brand"} />
        <SingleBrand key={1} brand={"brand"} />
      </div>
      <div className="flex justify-center mt-4 mb-[-15px]">
        <Link
          href="/"
          className="ease-in-up shadow-btn hover:shadow-btn-hover  rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90  md:px-9 lg:px-6 xl:px-9 !flex gap-2 items-center"
        >
          <span>View All Certificates</span> <span><FaArrowRight /></span>
        </Link>
      </div>
    </section>
  </>
  );
};

export default AboutSectionTwo;
