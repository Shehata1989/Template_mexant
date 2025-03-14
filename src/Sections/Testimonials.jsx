import { Box, Container, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";

import { TestimonialsData } from "../SliderData/TestimonialsData";


import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./Testimonials.css";

const Testimonials = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleSlideChange = useCallback((swiper) => {
    setIsFirst(swiper.isBeginning);
    setIsLast(swiper.isEnd);
  }, []);

  return (
    <div className="testimonials !mt-15 md:!mt-30">
      <Container className="!h-[550px]">
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
            className="testimonials-swiper !relative"
            sx={{ boxShadow: 3, borderRadius: "16px" }}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".custom-pagination",
            }}
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
                  maxWidth="md"
                  fixed
                  sx={{
                    px: { xs: 5, md: 1, lg: 0 },
                  }}
                >
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={{ xs: 4, md: 2 }}
                    className="slider-content text-center md:text-left"
                  >
                    <Box component={"div"} className="md:max-w-[50%] flex flex-col gap-5 justify-center items-center md:block">
                      {/* عنوان السلايد */}
                      <Typography
                        variant="h1"
                        color="primary"
                        sx={{
                          fontSize: { xs: 45, sm: 90 },
                          marginBottom: { xs: 0, sm: 4 },

                        }}
                      >
                        {slide?.icon}
                      </Typography>
                      {/* وصف السلايد */}
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: 12, sm: 14 },
                          fontWeight: 400,
                          marginBottom: { xs: 0, sm: 2 },
                          textAlign: { xs: "center", md: "left" },
                          width: "100%",
                        }}
                      >
                        {slide.Description}
                      </Typography>
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="text.secondary"
                        className="w-[50%]"
                        sx={{
                          fontSize: { xs: 12.5, sm: 25 },
                          textAlign: { xs: "center", md: "left" },
                          fontWeight: 900,
                        }}
                      >
                        {slide.name}
                      </Typography>
                      <Typography
                        variant="h1"
                        data-aos="flip-right"
                        data-aos-delay="400"
                        color="primary"
                        className="xl:max-w-[50%]"

                        sx={{
                          fontSize: { xs: 9, sm: 18 },
                          fontWeight: 700,
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </Box>
                    {/* صورة الخلفية */}
                    <Box component={"div"}>
                      <img
                        className="!object-cover"
                        src={slide.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Stack>
                </Container>
              </SwiperSlide>
            ))}
            {/* أزرار التنقل */}
            <div className="max-[900px]:hidden">
              <button
                className={`custom-prev w-[40px] h-[40px] absolute !z-1000 top-1/2 left-0 -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                  isFirst ? "opacity-40 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChevronLeft />
              </button>
              <button
                className={`custom-next w-[40px] h-[40px] absolute !z-1000 top-1/2 right-0 -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                  isLast ? "opacity-40 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChevronRight />
              </button>
            </div>
          </Swiper>
        </Box>
        <div className="custom-pagination"></div>
      </Container>
    </div>
  );
};

export default Testimonials;
