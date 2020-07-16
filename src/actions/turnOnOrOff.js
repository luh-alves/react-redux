import {actionTypes} from './actionsType'

export const turnOnOrOff = (on) =>{
    return{
        type: actionTypes.TURN_ON_OR_OFF,
        on:on
    }
}