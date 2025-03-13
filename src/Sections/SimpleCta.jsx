import { Box, Container, Stack, Typography } from "@mui/material";
import Btn from "../Components/Btn";

const SimpleCta = () => {
  return (
    <div className="simple-cta !bg-[url(./assets/images/cta-bg.jpg)] !bg-no-repeat !bg-cover !mt-15 md:!mt-30 !py-10 md:!py-20">
      <Container maxWidth="xl" fixed>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 4, md: 10 }}
          justifyContent="space-between"
          alignItems="center"
          className="simple-cta__content"
        >
          {/* العنوان */}
          <Box
            className="title"
            maxWidth="lg"
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: 20, sm: 36 } }}>
              Business{" "}
              <Typography
                sx={{ fontSize: { xs: 20, sm: 36 }, fontWeight: 700 }}
                component="span"
                color="primary"
              >
                Solutions
              </Typography>{" "}
              and{" "}
              <Typography
                sx={{ fontSize: { xs: 20, sm: 36 }, fontWeight: 700 }}
                component="span"
                color="secondary"
              >
                Crypto
              </Typography>{" "}
              Investments
            </Typography>
          </Box>

          {/* الأزرار */}
          <Box maxWidth="lg" className="buttons !min-w-[320px]">
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="center"
              gap={2}
            >
              <Btn
                info={{
                  variant: "contained",
                  color: "secondary",
                  size: "large",
                  label: "Discover More",
                  sx: {
                    px: { xs: 2, md: 3 },
                    fontWeight: 700,
                    fontSize: { xs: 12, md: 14 },
                  },
                }}
              />
              <Btn
                info={{
                  variant: "contained",
                  color: "primary",
                  size: "large",
                  label: "Contact Us",
                  sx: {
                    px: { xs: 2, md: 3 },
                    fontWeight: 700,
                    fontSize: { xs: 12, md: 14 },
                  },
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default SimpleCta;
