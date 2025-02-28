import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { IdeCodeRun, IdeCodeSubmit } from '@customTypes/ide';

const ideApi = {
  codeRun: async (bodyData: IdeCodeRun) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.IDE.RUN, { bodyData });

    return data;
  },

  condeSubmit: async (bodyData: IdeCodeSubmit) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.IDE.SUBMIT(bodyData.ideId), {
      bodyData,
    });

    return data;
  },
};

export default ideApi;
