import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Btn from "../Components/Btn";
import { NaccsData } from "../SliderData/naccsData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Naccs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true, // تشغيل التأثير مرة واحدة فقط لكل عنصر
      mirror: false,
      offset: 50,
    });

    AOS.refresh(); // تحديث التأثيرات عند تحميل الصفحة أو تغيير التاب
  }, [tabIndex]);


  const styleTap = { color: "text.secondary", fontSize: { sx: 12, md: 16 } };

  return (
    <Container maxWidth="xl" fixed className="naccs !mt-15 md:!mt-30">
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: 12, sm: 15 }, fontWeight: 900 }}
        className="title !mb-2 !uppercase !text-center"
        color="secondary"
      >
        About Us
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: 20, sm: 36 }, fontWeight: 700 }}
        className="title !mb-10 !text-center"
        color="text.secondary"
      >
        Know Us Better
      </Typography>
      <Grid container spacing={8}>
        {/* ✅ قسم التابز */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Tabs
            sx={{ mb: 5 }}
            value={tabIndex}
            onChange={(_, newIndex) => setTabIndex(newIndex)}
            centered
          >
            {NaccsData.map((category, index) => (
              <Tab
                sx={{
                  fontSize: { sx: 12, md: 16 },
                  fontWeight: 700,
                  color: "text.secondary",
                }}
                key={index}
                label={category.category}
              />
            ))}
          </Tabs>

          <TableContainer
          key={tabIndex}
          data-aos="zoom-in-up"
            sx={{ boxShadow: 3, borderRadius: "16px" }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={styleTap}>Project Title</TableCell>
                  <TableCell sx={styleTap}>Budget</TableCell>
                  <TableCell sx={styleTap}>
                    {tabIndex === 2 ? "Estimated" : "Deadline"}
                  </TableCell>
                  <TableCell sx={styleTap}>
                    {tabIndex === 2 ? "Technology" : "Client"}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {NaccsData[tabIndex].projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell sx={styleTap}>{project.title}</TableCell>
                    <TableCell sx={styleTap}>{project.budget}</TableCell>
                    <TableCell sx={styleTap}>
                      {project.deadline || project.estimated}
                    </TableCell>
                    <TableCell sx={styleTap}>
                      {project.client || project.technology}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* ✅ قسم النصوص */}
        <Grid size={{ xs: 12, md: 4 }} className="!translate-y-2">
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              },
            }}
            color="text.secondary"
          >
            <Typography sx={{ fontWeight: 900, mb: 3 }} variant="h6">
              Please tell us about your idea and how you want it to be
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, fontSize: 14, mb: 3 }}
            >
              You are allowed to use this template for your websites. You are
              NOT allowed to redistribute the template ZIP file on any other
              template websites.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700, fontSize: 14 }}>
              Thank you for downloading and using our templates. Please tell
              your friends about our website.
            </Typography>
            <Box sx={{ mt: { xs: 6, md: "auto" }, mb: 1 }}>
              <Btn
                info={{
                  variant: "contained",
                  color: "primary",
                  size: "large",
                  label: "Discover More",
                  sx: {
                    px: { xs: 2, md: 3 },
                    fontWeight: 700,
                    fontSize: { xs: 12, md: 14 },
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Naccs;
