import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">

        <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">Experience and Exquisite Hotel Immersed in Rich History and Timeless Elegance. </p>
        <button className="btn-primary" >Get Started</button>

        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Basic Room</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">+ 20</p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Luxury Room</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">+ 20</p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Suite</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">+ 20</p>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden">
          <Image src="" alt="" width={300} height={300} className="img scale-animation" />
        </div>
      </div>
    </section>)
};

export default HeroSection;