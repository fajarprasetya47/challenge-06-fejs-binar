const initialState = {
    placeholder: ''
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BTN_PILIH_MOBIL':
            return {
                ...state,
                placeholder: 'Pilih Mobil'
            }
        case 'SET_BTN_LANJUT':
            return {
                ...state,
                placeholder: 'Lanjutkan Pembayaran'
            }
        default:
            return state
    }
}

export default buttonReducer