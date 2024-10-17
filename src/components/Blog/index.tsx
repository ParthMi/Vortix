import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog = ({ fromHome }) => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {fromHome ?
            (blogData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            )))
            :
            (blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            )))
          }
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-[-15px]">
        <Link
          href="/blog"
          className="ease-in-up shadow-btn hover:shadow-btn-hover  rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90  md:px-9 lg:px-6 xl:px-9 !flex gap-2 items-center"
        >
          <span>View All Blogs</span> <span><FaArrowRight /></span>
        </Link>
      </div>

    </section>
  );
};

export default Blog;
