import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { ServicesData } from "../SliderData/ServicesData";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
  borderRadius: "0",
  minHeight: "100%",
}));

export const Services = () => {
  return (
    <Container maxWidth="xl" fixed className="services !mt-15 md:!mt-30">
      <Grid container spacing={2}>
        {ServicesData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: 3,
                height: { xs: "auto", md: "100%" },
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ p: 4, alignItems: "stretch", height: "100%" }}
              >
                <Item
                  sx={{
                    paddingRight: { xs: 0, md: 4 },
                    paddingBottom: { xs: 4, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.icon}
                </Item>
                <Item sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ fontWeight: 900 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.third"
                    sx={{ fontWeight: 700, fontSize: 14, paddingTop: 2 }}
                  >
                    {item.description}
                  </Typography>
                </Item>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
