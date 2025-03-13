import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeaderBar.css";

const pages = ["Home", "Services", "About", "Pages", "Testimonials"];
const subPages = ["Team", "Portfolio", "Careers", "Contact"];

function HeaderBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElPages, setAnchorElPages] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const scrollThreshold = 100;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY >= scrollThreshold && !hasScrolledOnce) {
        setIsVisible(false);
        setHasScrolledOnce(true);
        return;
      }

  
      // ✅ عند العودة إلى أعلى الصفحة 0px → استعادة الحالة الأصلية
      if (currentScrollY === 0) {
        setIsVisible(true);
        setHasScrolledOnce(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledOnce, isVisible]);
  
  
  

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-in-out",
      mirror: false,
      offset: 50,
    });

    setTimeout(() => AOS.refresh(), 100);
  }, [isVisible]);

  return (
    <AppBar
      key={isVisible}
      className={`!fixed !shadow-none transition-all duration-300
        ${hasScrolledOnce ? "!bg-[#212741]" : "!bg-transparent"}
      `}
      data-aos={isVisible ? "fade-down" : "fade-up"}
    >
      <Container maxWidth="xl" fixed sx={{ px: { xs: 5, md: 1, lg: 0 } }}>
        <Toolbar
          className={`py-5 !px-0 h-[120px] ${
            hasScrolledOnce ? "!py-0 !h-[80px]" : ""
          }`}
          disableGutters
          sx={{
            color: "text.primary",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            <img
              style={{ width: "150px", height: "auto", objectFit: "contain" }}
              src={Logo}
              alt="logo"
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setAnchorElNav(true)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              transformOrigin={{ vertical: "bottom", horizontal: "left" }}
              className="!mt-20"
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                  <Typography color="text.secondary" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
              letterSpacing: 1,
            }}
          >
            {pages.map((page) =>
              page === "Pages" ? (
                <NavLink key={page} onClick={() => setAnchorElPages(true)}>
                  {page}
                </NavLink>
              ) : (
                <NavLink key={page}>{page}</NavLink>
              )
            )}
          </Box>

          <Menu
            anchorEl={anchorElPages}
            open={Boolean(anchorElPages)}
            onClose={() => setAnchorElPages(null)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            className="!mt-20"
          >
            {subPages.map((subPage) => (
              <MenuItem
                sx={{
                  borderRadius: 5,
                  boxShadow: 3,
                  color: "text.secondary",
                  letterSpacing: 1,
                  "&:not(:last-child)": { marginBottom: 2 },
                }}
                key={subPage}
                onClick={() => setAnchorElPages(null)}
                className="!flex !justify-center !items-center !gap-2"
              >
                <Typography sx={{ color: "text.secondary", letterSpacing: 1 }}>
                  {subPage}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                fontSize: 14,
              }}
              variant="contained"
            >
              Contact Support
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderBar;
