const initialState = { on: false }

//passo para meu store
export const turnOnOrOff = (state = initialState, action) => {
    switch (action.type) {
        case 'TURN_ON_OR_OFF':
            return { ...state, on: action.on }
        default:
            return state
    }
}