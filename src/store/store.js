import {createStore} from 'redux';
import {turnOnOrOff} from '../reducers/turnOnOrOff';

export let store = createStore (turnOnOrOff);