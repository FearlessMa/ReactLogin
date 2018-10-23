/*
 * @Author: mhc 
 * @Date: 2018-10-23 21:14:55 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 22:13:56
 */

import { ADD_FLASH_MESSAGE, FILTER_FLASH_MESSAGE } from '../actions/actionTypes';
import shortid from 'shortid';

export const flashMessage = (state = { flashMessage: [] }, action) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return {
                ...state,
                flashMessage: [...state.flashMessage, { id: shortid.generate(), ...action.flashMessage }]
            }
        case FILTER_FLASH_MESSAGE:
            const index = state.flashMessage.findIndex((item, i) => item.id === action.id)
            console.log(index, 'index')
            if (index > 0) {
                return {
                    ...state,
                    flashMessage: [...state.flashMessage.slice(0, index), ...state.flashMessage.slice(index + 1)]
                }
            }
            return state;
        default: return state;
    }
}