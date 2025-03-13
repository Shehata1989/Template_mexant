import { Box, Container, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";

import { TestimonialsData } from "../SliderData/TestimonialsData";
import "./Testimonials.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";


const Testimonials = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleSlideChange = useCallback((swiper) => {
    setIsFirst(swiper.isBeginning);
    setIsLast(swiper.isEnd);
  }, []);

  return (
    <div className="testimonials !mt-15 md:!mt-30">
      <Container>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: 12, sm: 15 }, fontWeight: 900 }}
          className="title !mb-2 !uppercase !text-center"
          color="secondary"
        >
          Testimonials
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: 20, sm: 36 }, fontWeight: 700 }}
          className="title !mb-10 !text-center"
          color="text.secondary"
        >
          What They Say
        </Typography>
        <Box component={"div"}>
          <Swiper
            className="swiper !w-full"
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
            {TestimonialsData.map((slide, index) => (
              <SwiperSlide key={`${index}-${new Date().getTime()}`}>
                {/* المحتوى */}
                <Container
                  maxWidth="xl"
                  fixed
                  sx={{
                    px: { xs: 5, md: 1, lg: 0 },
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    className="slider-content text-center md:text-left"
                  >
                    <Box component={"div"}>
                      {/* عنوان السلايد */}
                      <Typography
                        variant="h1"
                        data-aos="flip-left"
                        data-aos-delay="300"
                        color="primary"
                      >
                        {slide?.icon}
                      </Typography>
                      {/* وصف السلايد */}
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="text.secondary"
                        className="xl:max-w-[50%]"
                        sx={{
                          fontSize: { xs: 14, sm: 20, md: 20 },
                          fontWeight: 700,
                        }}
                      >
                        {slide.Description}
                      </Typography>
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="text.secondary"
                        className="xl:max-w-[50%]"
                        sx={{
                          fontSize: { xs: 14, sm: 20, md: 20 },
                          fontWeight: 700,
                        }}
                      >
                        {slide.name}
                      </Typography>
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="text.secondary"
                        className="xl:max-w-[50%]"
                        sx={{
                          fontSize: { xs: 14, sm: 20, md: 20 },
                          fontWeight: 700,
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </Box>
                    {/* صورة الخلفية */}
                    <Box component={"div"} className="w-[50%]">
                      <img
                        className="w-full h-full object-cover"
                        src={slide.image}
                        alt=""
                      />
                    </Box>
                  </Stack>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل */}
          <div className="max-[900px]:hidden">
            <button
              className={`custom-prev w-[40px] h-[40px] absolute z-10 top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                isFirst ? "opacity-40 pointer-events-none" : "opacity-100"
              }`}
            ></button>
            <button
              className={`custom-next w-[40px] h-[40px] absolute z-10 top-1/2 right-4  -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                isLast ? "opacity-40 pointer-events-none" : "opacity-100"
              }`}
            ></button>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
