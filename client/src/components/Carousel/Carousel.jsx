import image from "../../assets/images/Frame 10.png"
import image1 from "../../assets/images/carsour-2.png"
import image2 from "../../assets/images/caursour-3.png"
import { Carousel } from 'flowbite-react';

export default function CarouselScreen() {
  return (
    <div className="h-56 sm:h-64 xl:h-[25rem] 2xl:h-96 ">
      <Carousel >
        <img src={image}  className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />
        <img src={image1} className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />
        <img src={image2} className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />

      </Carousel>
    </div>
  );
}
