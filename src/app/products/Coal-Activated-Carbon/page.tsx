import Breadcrumb from '@/components/Common/Breadcrumb'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const index = () => {
  const subTypes = [
    {
      id: 1,
      title: "Coal Based Granular Activated Carbon",
      description: "The coal based granular activated carbon is widely used in food industry, medical treatment, mine, metallurgy, petrochemical...",
      image: "/docs/images/blog/image-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Coal Powdered Acticated Carbon",
      description: "The coal-based powder activated carbon is made of high quality anthracite coal as raw material, by special production process (first carbonization and activation, then grinding into powder) is refined....",
      image: "/docs/images/blog/image-1.jpg",
      link: "#"
    }
  ];

  const images=[
    "/images/products/coal/1.jpg",
    "/images/products/coal/2.jpg",
    "/images/products/coal/3.jpg",
    "/images/products/coal/4.jpg"
  ]

  return (
    <>
      <Breadcrumb
        pageName="Coal Activated Carbon"
        mainPage="Our Products"
        description=""
      />
      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
            <div className="-mx-2 flex flex-wrap items-start">
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-base !leading-relaxed  md:text-base">
                  <p>
                    Coal Activated Carbon can be manufactured from different sources, which includes bituminous coal, anthracite and lignite. Of all these specified base materials, Activated Carbon produced from bituminous coal is an ideal choice due to its comparatively higher micro porosity and resistance to impact.
                  </p><br></br>
                  <p>
                    Although Coal Activated Carbon has a lower Adsorption characteristics when compared to Coconut Shell Activated Carbon and Wood Based Activated Carbon, studies have proven that it has higher capacity at larger concentrations.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 mt-4 md:mt-0">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/products/coal/g1.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-md object-cover drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/products/coal/g1.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full rounded-md object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
              <p className='my-4'>
                Coal Activated Carbon is used in specific fields of Application that require lower cost, high availability and to be used in higher concentrations. Here at Kalpaka we strive to deliver Coal based Activated Carbon that possesses lower impurity level and lesser ash content. Coal Activated Carbon is used mainly in Industrial Gas purification, potable water treatment, pond water purification and in waste water treatment.
              </p>
              <div className='mb-4 py-8 flex justify-center w-full'>


                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img,index)=> (
                    <div  key={index}>
                      <Image
                        className="h-[250px] object-cover max-w-full rounded-lg"
                        src={img}
                        alt={`Coconut image ${index + 1}`}
                        width={250} // Set an appropriate width
                        height={250} // Set an appropriate height
                      />
                    </div>
                    )
                    )}
                  </div>


                </div>
              <div className='w-full py-4 mt-8 md:flex gap-3 justify-center'>

                {
                  subTypes.map((t,i) => {
                    return <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        {/* <img className="rounded-t-lg" src={t.image} alt="" /> */}
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
