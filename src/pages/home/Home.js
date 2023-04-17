import { useEffect, useRef, useState } from "react";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setCurrentPageSelector,
  setListing,
  setListingSelector,
  setTotalPages,
  setTotalPagesSelector,
} from "../../redux/listings/ducks";
import { makeStyles } from "@mui/styles";
import DetailCard from "../../components/DetailCard";
import Loading from "../../components/Loading/Loading";
import data from "../../assets/data/payload.json";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listings = useSelector(setListingSelector);
  const [isLoading, setLoading] = useState(listings === null);
  const totalPages = useSelector(setTotalPagesSelector);
  const currentPage = useSelector(setCurrentPageSelector);
  const didMount = useRef(false);
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setListing(data?.data));
      dispatch(setTotalPages(data?.pagination?.totalPages));
      setLoading(false);
    }, 2000);
  };
  // Mimicing Api response
  useEffect(() => {
    // Runs when component mounts for first time
    if (listings === null) {
      fetchData();
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    // Runs only on currentPage change
    if (didMount.current) {
      fetchData();
    } else {
      didMount.current = true;
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <Container maxWidth="sm">
      <Box my="3rem">
        <Typography variant="h5" align="center">
          Real Estate Listings
        </Typography>
        {isLoading ? (
          <Loading />
        ) : (
          <Box>
            <Box
              sx={{
                margin: "1rem 0rem",
                height: 700,
                overflowY: "scroll",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
              }}
            >
              {listings.map((listing, i) => (
                <DetailCard detail={listing} key={i} index={i} />
              ))}
            </Box>

            <Stack direction="row" justifyContent="center">
              <Pagination
                classes={{ ul: classes.ul }}
                count={totalPages}
                page={currentPage}
                onChange={(e, val) => dispatch(setCurrentPage(val))}
                shape="rounded"
                color="primary"
              />
            </Stack>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Home;
