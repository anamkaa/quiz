const { createContext, useContext, useReducer } = require("react");

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const filterReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_BY_SEARCH":
        return { ...state, bySearch: action.payload };

      case "FILTER_BY_LEVEL":
        return { ...state, byLevel: action.payload };

      case "FILTER_BY_CATEGORY":
        return { ...state, byCategory: action.payload };

      case "CLEAR_LEVEL_FILTER":
        return { ...state, byLevel: "" };

      case "CLEAR_CATEGORY_FILTER":
        return { ...state, byCategory: "" };

      default:
        return state;
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byLevel: "",
    bySearch: "",
    byCategory: "",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
