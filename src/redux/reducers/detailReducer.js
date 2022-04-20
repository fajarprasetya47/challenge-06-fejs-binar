const initialState = {
    capacity: '4 Orang',
    tipeMobil: 'Manual',
    tahun: 'Tahun 2020'
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return {
                ...state,
                capacity: action.capacity,
                tipeMobil: action.tipeMobil,
                tahun: action.tahun
            }
        default:
            return state
    }
}

export default detailReducer;