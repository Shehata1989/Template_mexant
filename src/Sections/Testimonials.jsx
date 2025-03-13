import { Box, Container, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";

import { TestimonialsData } from "../SliderData/TestimonialsData";
import "./Testimonials.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
            className="swiper !w-[90%]"
            sx={{ boxShadow: 3, borderRadius: "16px" }}
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
                  maxWidth="md"
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
                    justifyContent={"space-between"}
                    className="slider-content text-center md:text-left"
                  >
                    <Box component={"div"}>
                      {/* عنوان السلايد */}
                      <Typography
                        variant="h1"
                        data-aos="flip-left"
                        data-aos-delay="300"
                        color="primary"
                        sx={{
                          fontSize: { xs: 12, sm: 14 },
                          fontWeight: 700,
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
                        className="xl:max-w-[50%]"
                        sx={{
                          fontSize: { xs: 12, sm: 14 },
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
                          fontSize: { xs: 12, sm: 14 },
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
                          fontSize: { xs: 12, sm: 14 },
                          fontWeight: 700,
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </Box>
                    {/* صورة الخلفية */}
                    <Box
                      component={"div"}
                      sx={{ borderRadius: "16px" }}
                    >
                      <img
                        className="!w-full !h-full !object-cover"
                        src={slide.image}
                        alt=""
                      />
                    </Box>
                  </Stack>
                </Container>
              </SwiperSlide>
            ))}
            {/* أزرار التنقل */}
            <div className="">
              <button
                className={`custom-prev w-[40px] h-[40px] absolute !z-1000 top-1/2 left-0 -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                  isFirst ? "opacity-40 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChevronLeft />
              </button>
              <button
                className={`custom-next w-[40px] h-[40px] absolute !z-1000 top-1/2 right-0  -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
                  isLast ? "opacity-40 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChevronRight />
              </button>
            </div>
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
