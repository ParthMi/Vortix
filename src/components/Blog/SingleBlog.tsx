import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: any }) => {
  console.log(blog.images[0].url)
  const { title, image, paragraph, author, tags, publishDate, id } = blog;
  return (
    <>
      <div className="group h-full relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={blog.images[0].url} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h4>
            <Link
              href={`/blog/${id}`}
              className="mb-4 block text-md font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {title}
            </Link>
          </h4>
          <div className="flex items-center">
            <div className="inline-block">
            <Link
              href={`/blog/${id}`}>
              <h4 className="text-sm font-medium text-primary underline">
                Read More
              </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
