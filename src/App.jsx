import "./App.css";
import { Header } from "./Components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router";
import { Container } from "@mui/material";
import Hero from "./Sections/Hero";
import "aos/dist/aos.css";
import { Services } from "./Sections/Services";
import SimpleCta from "./Sections/SimpleCta";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#43ba7f", // اللون الأساسي (الأزرق الافتراضي)
      },
      secondary: {
        main: "#ff511a", // اللون الثانوي (وردي)
      },
      bgcolor: {
        default: "#f5f5f5", // لون الخلفية الافتراضي
      },
      text: {
        primary: "#fff", // لون النص الأساسي
        secondary: "#212741", // لون النص الثانوي
        third: "#212741e3", // لون النص الثالث
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif", // الخط الافتراضي
      fontSize: 16,
      h1: {
        fontSize: "2.5rem", // حجم العنوان الكبير
        fontWeight: 700, // الوزن الافتراضي
        lineHeight: 1.2, // المسافة بين الأسطر
      },
      h6: {
        fontSize: "1.3rem", // حجم العنوان الصغير
        fontWeight: 700, // الوزن الافتراضي
        lineHeight: 1.2,
      },
      body1: {
        fontSize: "1rem", // النصوص العادية
        lineHeight: 1.6, // المسافة بين الأسطر
      },
    },
    spacing: 8, // وحدة المسافات الافتراضية (px)
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Header />
          <Hero />
          <Container>
            <Services />
          </Container>
          <SimpleCta />
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
