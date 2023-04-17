import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { setListingSelector } from "../../redux/listings/ducks";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import moment from "moment";
const keys = [
  {
    label: "Site Name",
    keyTitle: "siteName",
  },
  {
    label: "Facility Type",
    keyTitle: "facilityType",
  },
  {
    label: "Tender Number",
    keyTitle: "tenderNumber",
  },
  {
    label: "Status",
    keyTitle: "status",
  },
  {
    label: "Publication Date",
    keyTitle: "publicationDate",
    isTimestamp: true,
  },
  {
    label: "Expiry Date",
    keyTitle: "expiryDate",
    isTimestamp: true,
  },
];

const Detail = () => {
  const { index } = useParams();
  const listings = useSelector(setListingSelector);
  const navigate = useNavigate();
  if (listings === null) return <Navigate to="/" />;
  return (
    <Container maxWidth="sm">
      <Box my="3rem">
        <Typography variant="h5" align="center" gutterBottom>
          Site Detail
        </Typography>
        {keys.map((key, i) => (
          <Typography variant="h6" gutterBottom>
            <span style={{ color: "#c5c5c5" }}>{key.label}</span>
            {" - "}
            {key.isTimestamp
              ? moment(listings[index][key.keyTitle]).format("MMM Do YY")
              : listings[index][key.keyTitle]}
          </Typography>
        ))}
        <Stack my="2rem" direction="row" justifyContent={"flex-end"}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Back
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Detail;
