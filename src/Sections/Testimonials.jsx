import { Box, Container, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { TestimonialsData } from "../SliderData/TestimonialsData";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./Testimonials.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleSlideChange = useCallback((swiper) => {
    setIsFirst(swiper.isBeginning);
    setIsLast(swiper.isEnd);
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        easing: "ease-in-out",
        mirror: false,
        offset: 50,
      });
    };

    initAOS();

    return () => {
      setTimeout(() => {
        AOS.refresh(); // تحديث التأثيرات باستمرار
      }, 0);
    };
  }, []);

  return (
    <div className="testimonials !mt-15 md:!mt-30 !mb-10 xl:!mb-30 !overflow-hidden">
      <Container maxWidth="md" fixed className="">
        <Box component={"div"}>
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
        </Box>
        <Box component={"div"} sx={{ position: "relative" }}>
          <Swiper
            className="testimonials-swiper"
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
              type: "bullets",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            onSlideChange={handleSlideChange}
          >
            {TestimonialsData.map((slide, index) => (
              <SwiperSlide key={`${index}-${new Date().getTime()}`}>
                <Container maxWidth="md" fixed>
                  <Stack
                    className="slider-content"
                    sx={{
                      boxShadow: 3,
                      borderRadius: "16px",
                    }}
                    direction={{ xs: "column", md: "row" }}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={{ xs: 4, md: 2 }}
                  >
                    <Box
                    sx={{ width: { xs: "100%", md: "50%" }, paddingLeft: { xs: 0, md: 4 } }}
                      component={"div"}
                      className="md:max-w-[50%] flex flex-col gap-5 justify-center items-center md:block"
                    >
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
                      <Typography
                        data-aos="flip-left"
                        data-aos-delay="300"
                        variant="h1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: 12, sm: 14 },
                          fontWeight: 300,
                          marginBottom: { xs: 0, sm: 2 },
                          textAlign: { xs: "center", md: "left" },
                          px: { xs: 2, md: 0 },
                        }}
                      >
                        {slide.Description}
                      </Typography>
                      <Typography
                        data-aos="flip-up"
                        data-aos-delay="500"
                        variant="h1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: 12.5, sm: 25 },
                          textAlign: { xs: "center", md: "left" },
                          fontWeight: 900,
                        }}
                      >
                        {slide.name}
                      </Typography>
                      <Typography
                        data-aos="flip-up"
                        data-aos-delay="800"
                        variant="h1"
                        color="primary"
                        sx={{
                          fontSize: { xs: 9, sm: 18 },
                          fontWeight: 700,
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </Box>
                    <Box
                      component={"div"}
                      sx={{ width: { xs: "100%", md: "auto" }, height: "100%" }}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
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
              className={`custom-prev w-[40px] h-[40px] absolute !z-1000 top-[42%] left-0 -translate-y-1/2 cursor-pointer rounded-full bg-[#ff511a] hover:opacity-80 duration-300 ${
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
          {/* الـ Pagination متمركز داخل الـ Container */}
          <div className="custom-pagination absolute bottom-0 left-0 right-0 flex justify-center items-center !mt-5 md:!mt-10"></div>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
