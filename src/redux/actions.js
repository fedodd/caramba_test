import {
  FETCH_CARS,
  SET_ERROR_ON_LOAD,
  ADD_CAR,
  DELETE_CAR,
} from "./actionTypes";

export const fetchCars = (cars) => ({
  type: FETCH_CARS,
  payload: { cars },
});

export const setErrorOnLoad = (err) => ({
  type: SET_ERROR_ON_LOAD,
  payload: { err },
});

export const addCar = (car) => ({
  type: ADD_CAR,
  payload: { car },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});
