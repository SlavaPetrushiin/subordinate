import {ITimelineData} from "../api/dataApi";

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export interface IFetchSuccessAc{
    type: typeof FETCH_SUCCESS
    timelineData: ITimelineData
}

export interface IList {
    list: Array<IField>
}

export interface IField {
    title: string
    text?: string
    header: boolean
}

export type SystemActionTypes = IFetchSuccessAc