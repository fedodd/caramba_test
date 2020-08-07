import {
  FETCH_CARS,
  SET_ERROR_ON_LOAD,
  ADD_CAR,
  DELETE_CAR,
} from "./actionTypes";

const initialState = {
  cars: [],
  err: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS: {
      // fix serverside - bug: pending, not pednding
      console.log("in fetch car", action.payload);
      const fetchedCars = action.payload;
      const cars = fetchedCars.map((car) => {
        car.status === "pednding" ? (car.status = "pending") : null;
        return car;
      });
      console.log("in fetch car", cars);

      return {
        ...state,
        cars: fetchedCars,
        // ...cars,
      };
    }
    case SET_ERROR_ON_LOAD: {
      const err = action.payload;
      return {
        ...state,
        ...err,
      };
    }

    case ADD_CAR: {
      const { newCar } = action.payload;
      // const cars = [...cars, newCar]
      console.log("add car", car, cars);

      return {
        ...state,
        cars: [...cars, newCar],
      };
    }

    case DELETE_CAR: {
      const { id } = action.payload;
      console.log("in delete car", id, cars);

      const filterdCars = cars.filter((car) => car.id === id);
      return {
        ...state,
        cars: filterdCars,
      };
    }
    default:
      return state;
  }
}
