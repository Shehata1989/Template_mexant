import { Divider, Typography } from "@mui/material";
import Slide1 from "../assets/images/slide-01.jpg";
import Slide2 from "../assets/images/slide-02.jpg";
import Slide3 from "../assets/images/slide-03.jpg";

const typographyStyles = {
  fontSize: { xs: 20, sm: 40, md: 50 },
  fontWeight: 900,
};

const dividerStyles = {
  mx: { xs: "auto", md: 0 },
  my: { xs: 2, md: 4 },
  maxWidth: { xs: 150 },
  borderColor: "text.primary",
  borderWidth: 4,
  borderRadius: 2,
};

const renderTitle = (text) => (
  <>
    {text}
    <Divider sx={dividerStyles} variant="middle" component="li" />
  </>
);

export const sliderData = [
  {
    image: Slide1,
    title: renderTitle(
      <>
        <Typography sx={typographyStyles}>
          Get{" "}
          <Typography component="span" color="secondary" sx={typographyStyles}>
            ready
          </Typography>{" "}
          for your business
          <br />
          &amp; upgrade{" "}
          <Typography component="span" color="secondary" sx={typographyStyles}>
            all aspects
          </Typography>
        </Typography>
      </>
    ),
    description:
      "Mexant HTML5 Template is provided for free of charge. This layout is based on Bootstrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.",
  },
  {
    image: Slide2,
    title: renderTitle(
      <>
        <Typography sx={typographyStyles}>
          <Typography component="span" color="secondary" sx={typographyStyles}>
            Digital
          </Typography>{" "}
          Currency for you <br />
          &amp; Best{" "}
          <Typography component="span" sx={typographyStyles}>
            Crypto
          </Typography>{" "}
          Tips
        </Typography>
      </>
    ),
    description:
      "You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.",
  },
  {
    image: Slide3,
    title: renderTitle(
      <>
        <Typography sx={typographyStyles}>
          Best One in Town
          <br />
          &amp; Crypto{" "}
          <Typography component="span" color="secondary" sx={typographyStyles}>
            Services
          </Typography>
        </Typography>
      </>
    ),
    description:
      "When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.",
  },
];
