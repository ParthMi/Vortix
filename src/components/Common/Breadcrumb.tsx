import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
  mainPage
}: {
  pageName: string;
  mainPage?: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container bg-[#e4e4e480] dark:bg-[#47474780] rounded-lg pb-8 md:pb-0 ">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 flex flex-col justify-center">
              <div className="py-10 md:px-6 dark:text-white">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium dark:text-white leading-relaxed text-body-color">
                  <div className="text-start">
                    <ul className="flex flex-wrap items-center">
                      <li className="flex items-center dark:text-white">
                        <Link
                          href="/"
                          className="pr-1 text-base font-medium text-body-color hover:text-primary dark:text-white"
                        >
                          Home
                        </Link>
                        <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                      </li>
                      {mainPage && <li className="flex items-center dark:text-white">
                        <span
                          className="pr-1 text-base font-medium text-body-color hover:text-primary dark:text-white"
                        >
                          {mainPage}
                        </span>
                        <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                      </li>
                      }
                      <li className="text-base font-medium text-primary">
                        {pageName}
                      </li>
                    </ul>
                  </div>
                </p>
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
