export function changeLanguage(langDate) {
  return {
    type: "SET_Language",
    payload: langDate,
  };
}

export function addToFav(toFav) {
  return {
    type: "SET_Favourite",
    payload: toFav,
  };
}

export function removeFav(toFav) {
  return {
    type: "REMOVE_Favourite",
    payload: toFav,
  };
}
