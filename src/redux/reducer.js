import {
  FETCH_CARS,
  SET_ERROR_ON_LOAD,
  ADD_CAR,
  DELETE_CAR,
} from './actionTypes';

const initialState = {
  cars: [],
  err: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS: {
      // fix serverside - bug: pending, not pednding
      const fetchedCars = action.payload.cars;
      const cars = fetchedCars.map((car) => {
        car.status === 'pednding' ? (car.status = 'pending') : null;
        return car;
      });

      return {
        ...state,
        cars,
      };
    }
    case SET_ERROR_ON_LOAD: {
      const err = action.payload.err;
      return {
        ...state,
        err,
      };
    }

    case ADD_CAR: {
      const newCar = action.payload.car;
      const cars = [...state.cars, newCar];
      return {
        ...state,
        cars,
      };
    }

    case DELETE_CAR: {
      const { id } = action.payload;
      const filterdCars = state.cars.filter((car) => car.id !== id);
      return {
        ...state,
        cars: filterdCars,
      };
    }
    default:
      return state;
  }
}
