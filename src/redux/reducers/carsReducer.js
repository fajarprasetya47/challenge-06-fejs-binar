const initialState = {
    cars: undefined
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload
            }
        default:
            return state
    }
}

export default carsReducer