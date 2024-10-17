import Breadcrumb from '@/components/Common/Breadcrumb'
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

const index = () => {
  const subTypes = [
    {
      id: 1,
      title: "Coconut Shell Granular Activated Carbon",
      description: "Coconut shell granular activated carbon, made of high quality coconut shell, is a kind of broken carbon with irregular grain...",
      image: "/images/coconut/picture1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Coconut Shell Powdered Activated Carbon",
      description: "This product made of natural high-quality coconut shell as raw material, using advanced equipment and scientific...",
      image: "/images/coconut/pic1.jpeg",
      link: "#"
    }
  ];

  const images=[
    "/images/products/coconut/1.jpg",
    "/images/products/coconut/2.jpg",
    "/images/products/coconut/3.jpg",
    "/images/products/coconut/4.jpg",
    "/images/products/coconut/5.jpg",
    "/images/products/coconut/6.jpg",
    "/images/products/coconut/7.jpg",
    "/images/products/coconut/8.jpg",
  ]
  return (
    <div>
      <>
        <Breadcrumb
          pageName="Coconut Shell Activated Carbon"
          mainPage="Our Products"
          description=""
        />
        <section id="about" className="pt-8 md:pt-10 lg:pt-14">
          <div className="container">
            <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
              <div className="-mx-2 flex flex-wrap items-start">
                <div className="w-full px-4 lg:w-1/2 mt-4 md:mt-0">
                  <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                    <Image
                      src="/images/products/coconut/pic3.jpg"
                      alt="about-image"
                      fill
                      className="mx-auto max-w-full rounded-md object-cover drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    ></Image>
                    <Image
                      src="/images/products/coconut/pic3.jpg"
                      alt="about-image"
                      fill
                      className="mx-auto hidden max-w-full rounded-md object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="text-base !leading-relaxed  md:text-base">
                    Coconut shell activated carbon, made from coconut husk, is a vapor-activated material. As this carbon contains no chemical agent, when utilized on a medium, it won’t contaminate or respond with it. It’s anything but an absolutely normal and harmless to the ecosystem item, that has a little carbon impression and can efficiently absorb impurities with micro-pore molecular structure, for example, those present in drinking water. Coconut shell activated carbon, owing to its high abrasion resistance and unique physical and chemical characteristics, can safely support applications such as the recovery of gold and other precious metals.
                  </div>
                </div>
                <div className='my-4  px-4'>
                  We are one of the leading Coconut Activated Carbon Manufacturers in India, with a manufacturing capacity of 51 metric tons per day, resulting in 18,600 metric tons per year. Our Coconut Shell Activated Carbon is useful in purification & treatment of water, gas, air, gold and many other products through adsorption.
                </div>
                <div className='mb-4 py-8 flex justify-center w-full'>


                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img,index)=> (
                    <div  key={index}>
                      <Image
                        className="h-auto max-w-full rounded-lg"
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
                    subTypes.map((t) => {
                      return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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


      {/* Sub-type:
      i.. 
      Coconut shell granular activated carbon, made of high quality coconut shell, is a kind of broken carbon with irregular grain, high strength, and can be regenerated after being saturated. Coconut shell activated carbon is black appearance, granular shape, with developed pores, good adsorption performance, high strength, economic durability and other advantages.

      Send us your requirements, we will provide the best solution for you!

      ii... Coconut Shell Powdered Acticated Carbon
      https://micbacindia.com/coconut-shell-powdered-activated-carbon

      Coconut Shell Powdered Activated Carbon
      This product made of natural high-quality coconut shell as raw material, using advanced equipment and scientific technology, is processed by burning coconut shell with zero oxygen supply and for acid washed - phosphoric acid mixing and stirring, rinsing and other processes, and form black powder.

      It has well-developed macroporous structure and high specific surface area. It has strong adsorption capacity and fast filtration speed. It has excellent decolorization and purification performance.

      Widely used in the decolorization and purification, deodorization and purification of raw material medicines, pharmaceutical intermediates, finished medicines, various types of injections and reagents. It is suitable for the manufacture of oral tablets, anti-intestinal bacteria drugs, food alkaline detoxification drugs.

      It is also used for decolorization and purification of sugar, beverages, alcoholics, edible oils and other food industries. It is also widely used in decolorization, refining and purification of organic solvents, water purification industry, drinking water purification and sewage treatment.

      Send us your requirements, we will provide the best solution for you! */}


    </div>
  )
}

export default index
