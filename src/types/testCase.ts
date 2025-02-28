export type testCase = {
  input: string;
  output: string;
};

export type testCaseList = testCase[];

export interface SubmitTestCaseList extends testCase {
  id: string;
}
