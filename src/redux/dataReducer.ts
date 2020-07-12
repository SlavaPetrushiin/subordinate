import {FETCH_SUCCESS, SystemActionTypes, IFetchSuccessAc} from "./types";
import { ThunkAction } from "redux-thunk";
import {RootState} from "./store";
import dataApi, {ITimelineData} from "../api/dataApi";

const initialState = {
    timelineData: [] as ITimelineData
};

type StateType = typeof initialState

const dataReducer = (state= initialState, action: SystemActionTypes): StateType => {
   switch (action.type) {
       case FETCH_SUCCESS:
           return {
               ...state,
               timelineData: [...state.timelineData,  ...action.timelineData]
           };
       default :
           return state
   }
};

const timelineDataSuccess = (timelineData: ITimelineData): IFetchSuccessAc => {
    return {
        type: FETCH_SUCCESS,
        timelineData
    }
};

// ---------------   ThunkCreator
type ThunkActionType = ThunkAction<Promise<void>, RootState, unknown, SystemActionTypes>

export const fetchTimelineData = (): ThunkActionType => async (dispatch) => {
    try {
        const data = await dataApi.fetchData();
        dispatch(timelineDataSuccess(data));
    } catch (error) {

    }
};

export default dataReducer;