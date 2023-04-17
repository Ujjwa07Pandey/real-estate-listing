// State
export const INITIAL_STATE = {
  listings: null,
  total_pages: null,
  current_page: 1,
  visited: [],
};
//Actions
export const ListingActionTypes = {
  SET_LISTING: "SET_LISTING",
  SET_TOTAL_PAGES: "SET_TOTAL_PAGES",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_VISITED: "SET_VISITED",
};
//Action Creators
export const setListing = (value) => ({
  type: ListingActionTypes.SET_LISTING,
  payload: value,
});
export const setTotalPages = (value) => ({
  type: ListingActionTypes.SET_TOTAL_PAGES,
  payload: value,
});
export const setCurrentPage = (value) => ({
  type: ListingActionTypes.SET_CURRENT_PAGE,
  payload: value,
});
export const setVisited = (value) => ({
  type: ListingActionTypes.SET_VISITED,
  payload: value,
});

// Reducer
export const listingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListingActionTypes.SET_LISTING:
      return {
        ...state,
        listings: action.payload,
      };
    case ListingActionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        total_pages: action.payload,
      };
    case ListingActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        current_page: action.payload,
      };
    case ListingActionTypes.SET_VISITED:
      return {
        ...state,
        visited: action.payload,
      };

    default:
      return state;
  }
};
// Selectors
export const setListingSelector = (state) => state.listings;
export const setTotalPagesSelector = (state) => state.total_pages;
export const setCurrentPageSelector = (state) => state.current_page;
export const setVisitedSelector = (state) => state.visited;
