import Breadcrumb from '@/components/Common/Breadcrumb'
import SectionTitle from '@/components/Common/SectionTitle'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <>
      <Breadcrumb
        pageName="PELLETS (EXTRUDED) ACTIVATED CARBON"
        mainPage="Our Products"
        description=""
      />

      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-14 lg:pb-14">
            <div className="-mx-2 flex flex-wrap items-start">
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-base !leading-relaxed  md:text-lg">
                  Pellets activated carbon is widely used for purification of exhaust gas, chemical raw material gas, chemical synthesis gas, gas for pharmaceutical industry, carbon dioxide gas for beverages, purification of hydrogen gas, nitrogen gas, hydrogen chloride, ethane gas, purification and separation of atomic facility exhaust, etc. There is also impregnated activated carbon, such as KOH activated carbon, NaOH activated carbon, sulfur impregnated activated carbon, desulfurization and denitrification activated carbon, acid wash activated carbon for removing special harmful gases.
                </div>

              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
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
                  />
                </div>
              </div>
              <div className='w-full py-4 mt-8 grid md:grid-cols-2 gap-4'>
                <li className=" dark:text-dark-6 flex text-base">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Gas filter
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Painting workshop
                </li>
                <li className=" dark:text-dark-6 flex text-base">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  H2S and other waste gases purification
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  VR unit in petroleum refinery
                </li>
                <li className=" dark:text-dark-6 flex text-base">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Sewage treatment
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Desiccant material
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Drinking water
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Respirators industries
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Odor in the wastewater
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Removal ammonia gas
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Automotive for carbon canisters
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Refinery, gas station, oil tank excess gasoline recovery
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Pressure swing adsorption nitrogen
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Air conditioner
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  Smoking room filter
                </li>
                <li className=" dark:text-dark-6 flex text-base w-full">
                  <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                  MTBE purification
                </li>
              </div>
              <div className="max-w-6xl mx-auto p-4">
        <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
                <tr className="bg-[#ff5551] text-white">
                    <th className="border border-gray-300 p-4 text-left">Subject</th>
                    <th className="border border-gray-300 p-4 text-left" colSpan={4}>Pellet activated carbon</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-4">Coarseness (mm)</td>
                    <td className="border border-gray-300 p-4" colSpan={4}>4mm & 6 mm</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-4">Iodine Absorb (mg/g)</td>
                    <td className="border border-gray-300 p-4">≥700</td>
                    <td className="border border-gray-300 p-4">≥800</td>
                    <td className="border border-gray-300 p-4">≥900</td>
                    <td className="border border-gray-300 p-4">≥900</td>
                    <td className="border border-gray-300 p-4">≥900</td>

                </tr>
                <tr>
                    <td className="border border-gray-300 p-4">CTC</td>
                    <td className="border border-gray-300 p-4">≥30</td>
                    <td className="border border-gray-300 p-4">≥40</td>
                    <td className="border border-gray-300 p-4">≥50</td>
                    <td className="border border-gray-300 p-4">≥50</td>
                    <td className="border border-gray-300 p-4">≥50</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-4">Hardness (%)</td>
                    <td className="border border-gray-300 p-4">≥98</td>
                    <td className="border border-gray-300 p-4">≥98</td>
                    <td className="border border-gray-300 p-4">≥98</td>
                    <td className="border border-gray-300 p-4">≥98</td>
                    <td className="border border-gray-300 p-4">≥98</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-4">Moisture (%)</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-4">Loading Density (g/l)</td>
                    <td className="border border-gray-300 p-4">600-650</td>
                    <td className="border border-gray-300 p-4">550-600</td>
                    <td className="border border-gray-300 p-4">≤3</td>
                    <td className="border border-gray-300 p-4">500-550</td>
                    <td className="border border-gray-300 p-4">500-550</td>
                </tr>
            </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
