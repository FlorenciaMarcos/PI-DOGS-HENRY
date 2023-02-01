const axios = require("axios").default;
export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const GET_DETAILS = "GET_DETAILS";
export const GET_NAME_DOG = "GET_NAME_DOG";
export const CREATE_DOG = "CREATE_DOG";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";
export const CURRENT_PAGE = "CURRENT_PAGE;";
export const ORDER_BY_BD = "ORDER_BY_BD";
export function getDogs() {
  return async function (dispatch) {
    try {
      const allDogs = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: allDogs.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function getTemperament() {
  return async function (dispatch) {
    try {
      const allTemperaments = await axios.get(
        "http://localhost:3001/temperaments/"
      );
      return dispatch({
        type: GET_TEMPERAMENT,
        payload: allTemperaments.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
    } catch {
      window.location.replace("/*");
    }
  };
}

export function getNameDog(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/dogs?name=${name}`);
      return dispatch({
        type: GET_NAME_DOG,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Dog not found, try another name`);
      alert(`Dog not found, try another name`);
    }
  };
}

export function createDog(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/dogs/", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByTemperaments(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function filterByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
}
export function filterByWeight(payload) {
  console.log("action");
  return {
    type: FILTER_BY_WEIGHT,
    payload,
  };
}
export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function setCurrentPage(payload) {
  return {
    type: CURRENT_PAGE,
    payload,
  };
}
