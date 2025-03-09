import { Button } from "@mui/material";

const Btn = ({info}) => {
  const { variant, color, size,  sx, label} = info
  return (
    <>
      <Button
        variant={variant}
        color={color}
        sx={sx}
        size={size}
      >
        {label}
      </Button>
    </>
  );
};

export default Btn;
