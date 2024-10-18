import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ application }: { application: any }) => {
  const { name, image, designation } = application;

  return (
    <div className="w-full">
      <div className="rounded-md bg-white p-3 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ">
        <div className="relative h-[260px] rounded-md overflow-hidden">
          <Image
            src={image} // Make sure the image path is valid
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '75%', height: '75%',objectFit:"cover" }}
          />
        </div>

        <div className="flex items-center">

          <div className="w-full">
            <h3 className="mt-2 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
