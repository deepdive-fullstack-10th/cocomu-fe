import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { testCaseList } from '@customTypes/testCase';

const testCaseApi = {
  updateTestCase: async ({ spaceId, testCase }: { spaceId: string; testCase: testCaseList }) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(spaceId), { testCase });

    return data.result.testCases;
  },
};

export default testCaseApi;
