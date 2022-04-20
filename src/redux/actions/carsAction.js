import axios from 'axios';

const setCars = () => {
    return async (dispatch) => {
        const { data } = await axios.get("https://rent-cars-api.herokuapp.com/customer/car");
        dispatch({ type: 'SET_CARS', payload: data })
    };
};

export {setCars}