import Breadcrumb from '@/components/Common/Breadcrumb'
import Link from 'next/link';
import React from 'react'

const index = () => {
  const subTypes = [
    {
      id: 1,
      title: "Wood Based Granular Activated Carbon",
      description: "",
      image: "/docs/images/blog/image-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Wood Powdered Acticated Carbon",
      description: "This product made of natural high-quality wood as raw material, using advanced equipment and scientific technology....",
      image: "/docs/images/blog/image-1.jpg",
      link: "#"
    }
  ];
  return (
    <>
      <Breadcrumb
        pageName="Wood Activated Carbon"
        mainPage="Our Products"
        description=""
      />
      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
            <div className="-mx-2 flex flex-wrap items-start">
              <div className="w-full px-4 lg:w-1/2 mt-4 md:mt-0">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  {/* <Image
                    src="/images/products/pellets-activated-carbon.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-md object-cover drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/products/pellets-activated-carbon.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full rounded-md object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  /> */}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-base !leading-relaxed  md:text-base">
                  <p>
                  Wood Activated carbon is considered as one of those adsorbent Activated Carbon that has the highest purity index, since it is derived from selected grade of wood that is subjected to controlled Carbonization and Activation Processes. This characteristic property of Wood Activated Carbon makes it a best suited adsorbent that is widely used in Water Filtration Systems, since it does not release any harmful substances into the potable water and also used in the Food and Beverage Industry for purification and deodorization of ingredients.                  </p><br></br>
                  <p>
                  Wood Activated Carbon has always been associated with higher surface area and pore volume, enhancing the efficiency of the filtration process by assuring the purity standards of water and simultaneously reducing the filtration time. With abundantly large pores combined with the ability to maintain the non-toxic standards, it finds its application as adsorbent in filtration units of pharmaceutical and Synthetic chemical industries.
                  </p>
                </div>
              </div>
              <p className='mt-3'>
              Wood Activated Carbon to a larger extent, owing to its meso and macropore structure is unable to remove many finer contaminants, however it can be used in certain specific contaminant removal. Another important feature of Wood based Activated Carbon is that, being obtained from a renewable source, it has lower carbon impact.
              </p>
              <div className='w-full py-4 mt-8 md:flex gap-3 justify-center'>

                {
                  subTypes.map((t) => {
                    return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img className="rounded-t-lg" src={t.image} alt="" />
                      </a>
                      <div className="p-5">
                        <a>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t.description}</p>
                        <Link href={t.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
