// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../SliderData/SliderData.jsx";

// Import Swiper modules
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./Slider.css";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Material UI icons
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useCallback } from "react";

const SliderApp = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleSlideChange = useCallback((swiper) => {
    setIsFirst(swiper.isBeginning);
    setIsLast(swiper.isEnd);
    AOS.refreshHard();
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 500,
        once: false, // السماح بإعادة التأثيرات عند تغيير السلايد
        easing: "ease-in-out",
        mirror: false,
        offset: 50,
      });
    };

    initAOS();

    return () => {
      setTimeout(() => {
        AOS.refresh(); // تحديث التأثيرات باستمرار
      }, 100);
    };
  }, []);

  return (
    <div className="bg-[#222] !w-screen !h-screen">
      <Swiper
        className="h-screen w-screen"
        modules={[Navigation, Pagination, Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSlideChange={handleSlideChange}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={`${index}-${new Date().getTime()}`}>
            {/* المحتوى */}
            <Container maxWidth={{ xs: "sm", md: "md", lg: "lg" }} fixed sx={{ px: { xs: 5, md: 1, lg: 0 }}}>
              <Stack
                direction="column"
                className="absolute top-1/2 transform -translate-y-1/2"
              >
                {/* عنوان السلايد */}
                <Typography
                  data-aos="flip-left"
                  data-aos-delay="300"
                  variant="h1"
                  color="text.primary"
                  sx={{ fontSize: { xs: 30, md: 50 }, fontWeight: 900 }}
                >
                  {slide.title}
                </Typography>
                {/* وصف السلايد */}
                <Typography
                  data-aos="flip-right"
                  data-aos-delay="400"
                  color="text.primary"
                  className="max-w-[90%] md:max-w-[50%] md:text-left"
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {slide.description}
                </Typography>
                <div data-aos="fade-up" data-aos-delay="500" className="!pt-10">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ px: { xs: 3, md: 5 }, fontWeight: 700, fontSize: 14 }}
                  >
                    Discover More
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      ml: 2,
                      px: { xs: 3, md: 5 },
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </Stack>
            </Container>

            {/* صورة الخلفية */}
            <img
              className="w-full h-full object-cover"
              src={slide.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <div className="max-[900px]:hidden">
        <button
          className={`custom-prev w-[40px] h-[40px] absolute z-10 top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-[#43ba7f] hover:opacity-80 duration-300 ${
            isFirst ? "opacity-40 pointer-events-none" : "opacity-100"
          }`}
        >
          <ChevronLeft />
        </button>
        <button
          className={`custom-next w-[40px] h-[40px] absolute z-10 top-1/2 right-4  -translate-y-1/2 cursor-pointer rounded-full bg-[#43ba7f] hover:opacity-80 duration-300 ${
            isLast ? "opacity-40 pointer-events-none" : "opacity-100"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SliderApp;
