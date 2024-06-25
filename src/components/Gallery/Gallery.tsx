import Image from 'next/image';

const Gallery = () => {
  return (
    <div className=' px-4 mx-auto container py-6 h-full 2xl:max-w-screen-xl'>
      {/* flex items-center gap-12 container mx-auto */}
      <div className='flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-3.jpeg'
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-3.jpeg'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;