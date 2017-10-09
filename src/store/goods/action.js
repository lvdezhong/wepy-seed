import type from './type'
import { createAction } from 'redux-actions'

export const countPlus = createAction([type.COUNT_PLUS])
export const countMinus = createAction([type.COUNT_MINUS])