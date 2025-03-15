import { Box, Container } from "@mui/material";
import Client from "../assets/images/client-01.png";
import Grid from "@mui/material/Grid2";
const Partners = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "bgColor.third" }}>
      <Container maxWidth="xl" fixed>
        <Box className="!py-10 md:!py-20" component="section">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[...Array(6)].map((_, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} md="auto" key={index}>
                <img src={Client} alt={`Client ${index + 1}`} className="w-full h-auto" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
