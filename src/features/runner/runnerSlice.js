import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    exampleList: [
        {
            distance: 15.1,
            pace: '530',
            cadence: '190',
            completeDateTime: '2021-05-15 21:30',
            completeDate: '2021-05-15',
            title: '수정이랑 달리기',
            type: 'success'
        },
        {
            distance: 10.1,
            pace: '500',
            cadence: '190',
            completeDateTime: '2021-05-17 19:30',
            completeDate: '2021-05-17',
            title: '혼뛰',
            type: 'success'
        },
        {
            distance: 12.1,
            pace: '530',
            cadence: '190',
            completeDateTime: '2021-05-18 20:30',
            completeDate: '2021-05-18',
            title: '달음박 벙개런',
            type: 'success'
        },
        {
            distance: 12.1,
            pace: '530',
            cadence: '190',
            completeDateTime: '2021-05-18 20:30',
            completeDate: '2021-05-19',
            title: '수정이 사랑해',
            type: 'success'
        },
    ],
    runningList:[
    ]
}

 export const runnerSlice = createSlice({
    name: 'runner',
    initialState,
    reducers: {
        addRunningRecord: (state, action) => {
            state.runningList = state.runningList.concat(action.payload);
        }
    }
 })

 export default runnerSlice.reducer;