import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container bg-[#e4e4e480] dark:bg-[#47474780] rounded-lg pb-8 md:pb-0 ">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 flex flex-col justify-center md:w-8/12 lg:w-7/12">
              <div className="max-w-[570px] py-10 dark:text-white">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium dark:text-white leading-relaxed text-body-color">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center dark:text-white">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary dark:text-white"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>


        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
