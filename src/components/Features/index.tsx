import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  const products = [
    {
      id: 1,
      name: 'Coconut Shell Active Carbon',
      href: '/products/Coconut-Shell-Active-Carbon',
      imageSrc: '/images/products/coconut/pic3.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Coal Activated Carbon',
      href: '/products/Coal-Activated-Carbon',
      imageSrc: '/images/products/coal/g1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Wood Activated Carbon',
      href: '/products/Wood-Activated-Carbon',
      imageSrc: '/images/products/wood/Wood-Activated-Carbon.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 4,
      name: 'Coconut Shell Pellets Activated Carbon',
      href: '/products/Coconut-Shell-Pellets-Activated-Carbon',
      imageSrc: '/images/products/pellets-activated-carbon.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
  ]

  return (
    <>
      <section className="dark:bg-bg-color-dark bg-white-light relative z-10 py-2 md:py-4 lg:py-8">
        <div className="container mt-2">
          <SectionTitle
            title="Our Products"
            paragraph=""
            center
          />
          <section id="about" className="container pt-4 md:pt-4 lg:pt-4">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 pb-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>
              <div className="grid grid-cols-1 pb-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (
  <Link key={product.id} href={product.href} className="group">
    <div 
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}  // Stagger animation delay (100ms between each)
      className="aspect-h-1 h-[250px] aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
    >
      <Image
        alt={product.imageAlt}
        src={product.imageSrc}
        fill
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 className="mt-4 text-base text-black dark:text-white text-center">{product.name}</h3>
  </Link>
))}

              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}


export default Features;
