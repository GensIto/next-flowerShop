import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート
import 'swiper/css/bundle'

SwiperCore.use([Pagination, Navigation])

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <Image src="/vercel.svg" alt="Vercel Logo" width={1440} height={800} />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image src="/vercel.svg" alt="Vercel Logo" width={1440} height={800} />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image src="/vercel.svg" alt="Vercel Logo" width={1440} height={800} />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image src="/vercel.svg" alt="Vercel Logo" width={1440} height={800} />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image src="/vercel.svg" alt="Vercel Logo" width={1440} height={800} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
