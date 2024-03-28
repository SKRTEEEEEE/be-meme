"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import { serviceData } from '@/data';
import Image from 'next/image';
interface ServiceItem {
    image: string;
    title: string;
    description: string;
}

interface SliderDoubleProps {
    data: ServiceItem[];
}

const SliderDoble: React.FC<SliderDoubleProps> = ({data}) => {

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },

            }}
            freeMode={true}
            pagination={{
                clickable: true,
                
            }}
            modules={[Pagination]}

            className="h-[240px] md:h-[340px] w-[350px] lg:w-[500px] md:w-[400px]"
        >

            {data.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="grid px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className='flex xl:gap:6 gap-2 mb-2'> 
                            {/* <Image src={item.image} alt={item.title} width={200} height={200}  /> */}
                            <Image src={item.image} alt={item.title} width="50" height="50" className=''/>

                            <h3 className=" text-secondary ">{item.title}</h3>
                        </div>
                        <p className="text-sm">{item.description}</p>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderDoble;