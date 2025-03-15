import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import calculatorImage from "../assets/images/calculator-image.png";
import "./FormsCalculator.css";

const FormsCalculator = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // نمط موحد لجميع حقول TextField
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "transparent", // جعل الخلفية شفافة دائمًا
      "& fieldset": {
        borderColor: "bgColor.secondary", // اللون الأساسي للحدود
      },
      "&:hover fieldset": {
        borderColor: "bgColor.secondary", // اللون عند الـ Hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "bgColor.secondary", // اللون عند الـ Focus
      },
    },
    "& .MuiInputLabel-root": {
      color: "bgColor.secondary", // لون الـ Label الأساسي (عند الـ Blur أيضًا)
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "bgColor.secondary", // لون الـ Label عند الـ Focus
    },
    "& .MuiOutlinedInput-input": {
      color: "text.primary", // لون النص داخل الحقل
    },
  };

  return (
    <Box className="forms-calculator !bg-[url(./assets/images/calculator-bg.jpg)] !bg-no-repeat !bg-cover !mt-15 md:!mt-30 max-h-[600px]">
      <Container maxWidth="xl" fixed className="!max-h-[600px]">
        <Grid
          container
          justifyContent={{ xs: "center", md: "center" }}
          alignItems="center"
        >
          {/* صورة الآلة الحاسبة */}
          <Grid className="hidden-930" size={{ xs: 12, md: 6 }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <img
                className="calculator-image !max-w-full !-mt-13"
                src={calculatorImage}
                alt="Calculator"
              />
            </div>
          </Grid>

          {/* نموذج الإدخال */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 12, sm: 15 }, fontWeight: 900 }}
                className="title !uppercase !text-center"
                color="secondary"
              >
                Your Freedom
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 20, sm: 36 }, fontWeight: 700 }}
                className="title !mb-7  !text-center"
                color="text.primary"
              >
                Get a Financial Plan
              </Typography>
              <Stack direction="row" gap={2}>
                {/* Name Field */}
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      fullWidth
                      sx={textFieldStyles}
                    />
                  )}
                />

                {/* Email Field */}
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      fullWidth
                      sx={textFieldStyles}
                    />
                  )}
                />
              </Stack>

              {/* Subject Field */}
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    fullWidth
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Reason Select Field */}
              <Controller
                name="reason"
                control={control}
                defaultValue=""
                rules={{ required: "Please select a reason" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Your Reason"
                    error={!!errors.reason}
                    helperText={errors.reason?.message}
                    fullWidth
                    sx={textFieldStyles}
                  >
                    <MenuItem
                      sx={{
                        color: "text.secondary",
                        "&:hover": { backgroundColor: "#d1e7fd" },
                        "&.Mui-selected": {
                          backgroundColor: "#d1e7fd !important",
                        },
                      }}
                      value="support"
                    >
                      Support
                    </MenuItem>
                    <MenuItem
                      sx={{
                        color: "text.secondary",
                        "&:hover": { backgroundColor: "#d1e7fd" },
                        "&.Mui-selected": {
                          backgroundColor: "#d1e7fd !important",
                        },
                      }}
                      value="feedback"
                    >
                      Feedback
                    </MenuItem>
                    <MenuItem
                      sx={{
                        color: "text.secondary",
                        "&:hover": { backgroundColor: "#d1e7fd" },
                        "&.Mui-selected": {
                          backgroundColor: "#d1e7fd !important",
                        },
                      }}
                      value="inquiry"
                    >
                      Inquiry
                    </MenuItem>
                  </TextField>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FormsCalculator;