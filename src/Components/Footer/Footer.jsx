import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "bgColor.fourth",
        padding: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography

        variant="h1"
        sx={{ fontSize: { xs: 12, sm: 15 }, fontWeight: 700 }}
        className="title !mb-2 !text-center"
        color="text-primary"
      >
        Copyright © 2025 Mexant Co., Ltd. All Rights Reserved. <br/>
        Designed by 
        <Typography
          component={"span"}
          color="secondary"
          sx={{ fontSize: { xs: 12, sm: 15 }, fontWeight: 700 }}
        >
          {" "}Ahmed Shehata
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
