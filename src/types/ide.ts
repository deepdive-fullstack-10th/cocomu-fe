import { Language } from './space';
import { SubmitTestCaseList } from './testCase';

export interface IdeCodeRun {
  ideId: string;
  language: Language;
  inputData: string;
  code: string;
}

export interface IdeCodeSubmit {
  ideId: string;
  language: Language;
  code: string;
  testCases: SubmitTestCaseList[];
}
