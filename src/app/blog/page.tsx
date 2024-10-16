import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Vortix Enterprise",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Discover insightful articles on various topics, curated to keep you informed and inspired. Stay updated with the latest trends and expert opinions."
      />

      <section className="pb-[60px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 "
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
