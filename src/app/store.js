import { configureStore } from '@reduxjs/toolkit';
import runnerSlice from '../features/runner/runnerSlice';

export const store = configureStore({
  reducer: {
    runner: runnerSlice,
  },
});
