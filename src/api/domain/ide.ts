import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { RunIDEData, SubmitIDEData } from '@customTypes/ide';

const ideApi = {
  run: async (runIDEData: RunIDEData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.IDE.RUN, runIDEData);

    return data;
  },

  submit: async (ideId: string, submitIDEData: SubmitIDEData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.IDE.SUBMIT(ideId), submitIDEData);

    return data;
  },
};

export default ideApi;
