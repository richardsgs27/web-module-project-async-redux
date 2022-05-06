import axios from "axios";
export const ON_START = "ON_START";
export const ON_SUCCESS = "ON_SUCCESS";

export const getUniversities = (seachTerm) => {
  return (dispatch) => {
    dispatch(onStart())
    axios
      .get(`http://universities.hipolabs.com/search?country=Honduras=${seachTerm}`)
      .then((res) => {
        dispatch(onSuccess(res.data.data))
      });
  };
};

export const onStart = () => {
  return { type: ON_START };
};

export const onSuccess = (universities) => {
  return { type: ON_SUCCESS, payload: universities };
};
