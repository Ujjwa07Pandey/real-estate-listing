import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Oops , Page Not Found :{"("}</Typography>
    </Box>
  );
};

export default NotFound;
