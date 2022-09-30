export let initialState = {
  lang: "en-US",
  loader: false,
  favourites: [],
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_Language":
      return {
        ...state,
        lang: action.payload,
      };

    case "SET_Favourite":
      let isInFavourite = state.favourites.findIndex(
        (product) => product.id == action.payload.id
      );
      if (isInFavourite === -1) {
        state.favourites.push(action.payload);
      }
      return state;

    case "REMOVE_Favourite":
      let newArr = state.favourites.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.favourites = newArr;
      console.log(state.favourites);
      return state;

    default:
      return state;
  }
}
