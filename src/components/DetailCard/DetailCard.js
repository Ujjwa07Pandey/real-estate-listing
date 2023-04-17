import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setVisited, setVisitedSelector } from "../../redux/listings/ducks";
const MATCH = "PUBLISHED";
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
];
const DetailCard = ({ detail, index }) => {
  const visited = useSelector(setVisitedSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: visited.includes(index) ? "#1A2027" : "#282c34",
        color: "#fff",
        cursor: "pointer",
        borderWidth: "0.5px",
        borderStyle: "solid",
        borderColor: visited.includes(index)
          ? theme.palette.primary.main
          : "#c5c5c5",
        "&:hover": {
          backgroundColor: "#1A2027",
        },
        margin: "1.5rem 0rem",
      }}
      onClick={() => {
        if (!visited.includes(index)) {
          dispatch(setVisited([...visited, index]));
        }
        navigate(`/detail/${index}`);
      }}
      raised={true}
    >
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Box flexGrow={1}>
            {keys.map((key, i) => (
              <Typography variant="subtitle1" gutterBottom key={i}>
                <span style={{ fontStyle: "italic", color: "#c5c5c5" }}>
                  {key.label}
                </span>
                {" - "}
                {detail[key.keyTitle]}
              </Typography>
            ))}
          </Box>
          <Chip
            label={detail.status}
            color={detail.status === MATCH ? "success" : "error"}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DetailCard;
