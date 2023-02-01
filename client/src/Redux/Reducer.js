// importar acciones de carpeta acciones
import {
  GET_DOGS,
  GET_TEMPERAMENT,
  GET_DETAILS,
  GET_NAME_DOG,
  CREATE_DOG,
  FILTER_BY_TEMPERAMENTS,
  FILTER_CREATED,
  FILTER_BY_NAME,
  FILTER_BY_WEIGHT,
  CURRENT_PAGE,
  ORDER_BY_BD,
} from "./Action";
// ejemplo:    import { GET_ALL_COUNTRIES_API, SEARCH_BY_NAME } from "./actions";

// const initialState = {
//   // ...
//   allDogs: [],
//   filteredDogs: [],
// };

// export const rootReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_ALL_COUNTRIES_API:

//     default:
//       return { ...state };
//   }
// };
const initialState = {
  dogs2: [],
  dogs: [],
  allDogs: [], //declaro un estado q siempre va a tener todos los perros
  temperament: [],
  detail: {},
  currentPage: 1,
  deleteId: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      console.log(action.payload);
      return {
        ...state, //guardo el estado
        dogs: action.payload, //en mi estado dogs mandà todo lo q te mande la acción de dogs
        allDogs: action.payload, //acá me guarda todos los perros para q pueda usarlo cdo filtro y q me los cargue a todos de nuevo, y no sobre el filtro del filtro
      };

    case GET_NAME_DOG:
      return {
        ...state,
        dogs: action.payload, //es el arreglo q estoy renderizando
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperament: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
      };

    case FILTER_BY_TEMPERAMENTS:
      const allBreeds = state.allDogs; //aca tb para el filtro desde todos
      const temperamentFiltered =
        action.payload === "All"
          ? state.allDogs
          : allBreeds.filter((el) => {
              return el.temperament
                ? el.temperament.includes(action.payload)
                : el.temperaments
                    ?.map((ele) => ele.name)
                    .includes(action.payload);
            });
      return {
        ...state, //me traigo todo lo de estado
        dogs: temperamentFiltered,
      };

    case FILTER_CREATED:
      const filterCreated =
        action.payload === "Created"
          ? state.allDogs.filter((el) => el.createdInDb)
          : state.allDogs.filter((el) => !el.createdInDb);
      return {
        ...state, //me devuelve el estado anterior
        dogs: action.payload === "All" ? state.allDogs : filterCreated,
      };

    case FILTER_BY_NAME: //'Asc. Desc'
      let sortName =
        action.payload === "Asc"
          ? [...state.allDogs].sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            })
          : [...state.allDogs].sort(function (a, b) {
              // si no, ordenalo 'Desc'
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
      return {
        ...state,
        dogs: sortName,
      };

    case FILTER_BY_WEIGHT:
      console.log(action.payload);
      let allDogWeight = state.dogs.filter((d) => d.weight_min);
      let sortWeight =
        action.payload === "orderLIGHT"
          ? allDogWeight.sort((a, b) => {
              return a.weight_min - b.weight_min;
            })
          : allDogWeight
              .sort((a, b) => {
                return a.weight_min - b.weight_min;
              })
              .reverse();
      return {
        ...state,
        dogs: sortWeight,
      };
    case ORDER_BY_BD:
      const totaldogs = state.dogs2;
      let orderCreated =
        action.payload === "Show BD dogs"
          ? totaldogs.filter((el) => el.CreateDB)
          : action.payload === "Show API dogs"
          ? totaldogs.filter((el) => !el.CreateDB)
          : "";
      console.log(orderCreated);
      return {
        ...state,
        Dogs: orderCreated,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
