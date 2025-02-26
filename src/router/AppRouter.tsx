import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useToastStore } from '@stores/useToastStore';
import { PATH } from '@constants/path';

import Loading from '@pages/Loading';
import ErrorPage from '@pages/ErrorPage';
import MainLayout from '@pages/MainLayout';
import StudyList from '@pages/Study/StudyList';
import App from '../App';

const StudyCreate = lazy(() => import('@pages/Study/StudyCreate'));
const StudyEdit = lazy(() => import('@pages/Study/StudyEdit'));
const StudyParticipation = lazy(() => import('@pages/Study/StudyParticipation'));
const StudyDetail = lazy(() => import('@pages/Study/StudyDetail'));

const SpaceList = lazy(() => import('@pages/Study/SpaceList'));
const MemberList = lazy(() => import('@pages/Study/MemberList'));
const StudyInfo = lazy(() => import('@pages/Study/StudyInfo'));

const MyPage = lazy(() => import('@pages/MyPage'));

const SpaceDetail = lazy(() => import('@pages/Space/SpaceDetail'));
const SpaceCreate = lazy(() => import('@pages/Space/SpaceCreate'));
const SpaceWaiting = lazy(() => import('@pages/Space/SpaceWaiting'));
const SpaceRunning = lazy(() => import('@pages/Space/SpaceRunning'));
const SpaceFeedback = lazy(() => import('@pages/Space/SpaceFeedback'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
    },
    mutations: {
      onError: (error) => {
        useToastStore.getState().error(error.message);
      },
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainLayout />,
          children: [
            { index: true, element: <StudyList /> },
            { path: PATH.STUDY.CREATE, element: <StudyCreate /> },
            { path: PATH.STUDY.EDIT, element: <StudyEdit /> },
            {
              path: PATH.STUDY.PARTICIPATION,
              element: <StudyParticipation />,
              children: [{ index: true, element: <StudyInfo /> }],
            },
            {
              path: PATH.STUDY.DETAIL,
              element: <StudyDetail />,
              children: [
                { index: true, element: <SpaceList /> },
                { path: PATH.STUDY.MEMBERS, element: <MemberList /> },
                { path: PATH.STUDY.INFO, element: <StudyInfo /> },
              ],
            },
            {
              path: PATH.MYPAGE,
              element: <MyPage />,
              children: [
                { index: true, element: <StudyList /> },
                { path: PATH.STUDY.SPACE_LIST, element: <SpaceList /> },
              ],
            },
            { path: PATH.SPACE.CREATE, element: <SpaceCreate /> },
          ],
        },
        {
          path: PATH.SPACE.DETAIL,
          element: <SpaceDetail />,
          children: [
            { index: true, element: <SpaceWaiting /> },
            { path: PATH.SPACE.RUNNING, element: <SpaceRunning /> },
            { path: PATH.SPACE.FEEDBACK, element: <SpaceFeedback /> },
          ],
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);

export default function AppRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}
