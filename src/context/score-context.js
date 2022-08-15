const { createContext, useContext, useReducer } = require("react");

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const scoreReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, score: state.score + action.payload };

      case "RESET":
        return { ...state, score: 0 };

      default:
        return state;
    }
  };

  const [scoreState, scoreDispatch] = useReducer(scoreReducer, {
    score: 0,
  });

  return (
    <ScoreContext.Provider value={{ scoreState, scoreDispatch }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
