import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ErrorPage from '@pages/ErrorPage';
import Loading from '@pages/Loading';
import App from '../App';

const StudyList = lazy(() => import('@pages/StudyList'));
const StudyCreate = lazy(() => import('@pages/StudyCreate'));
const StudyParticipation = lazy(() => import('@pages/StudyParticipation'));
const StudyDetail = lazy(() => import('@pages/StudyDetail'));
const SpaceList = lazy(() => import('@pages/SpaceList'));
const MemberList = lazy(() => import('@pages/MemberList'));
const StudyInfo = lazy(() => import('@pages/StudyInfo'));
const SpaceCreate = lazy(() => import('@pages/SpaceCreate'));
const MyPage = lazy(() => import('@pages/MyPage'));
const Codingspage = lazy(() => import('@pages/CodingSpace'));
const SpaceReady = lazy(() => import('@pages/CodingSpace/SpaceReady'));
const SpaceStart = lazy(() => import('@pages/CodingSpace/SpaceStart'));
const SpaceFinish = lazy(() => import('@pages/CodingSpace/SpaceFinish'));

const withSuspense = (Component: React.FC) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const withoutSuspense = (Component: React.FC) => <Component />;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: withoutSuspense(StudyList),
      },
      {
        path: 'study/create',
        element: withSuspense(StudyCreate),
      },
      {
        path: 'space/create',
        element: withSuspense(SpaceCreate),
      },
      {
        path: 'participation',
        element: withSuspense(StudyParticipation),
        children: [
          {
            index: true,
            element: withoutSuspense(StudyInfo),
          },
        ],
      },
      {
        path: ':studyId',
        element: withSuspense(StudyDetail),
        children: [
          {
            index: true,
            element: withoutSuspense(SpaceList),
          },
          {
            path: 'members',
            element: withoutSuspense(MemberList),
          },
          {
            path: 'info',
            element: withoutSuspense(StudyInfo),
          },
        ],
      },
      {
        path: 'mypage/:userId',
        element: withSuspense(MyPage),
        children: [
          {
            index: true,
            element: withoutSuspense(StudyList),
          },
          {
            path: 'spaceList',
            element: withoutSuspense(SpaceList),
          },
        ],
      },
    ],
  },
  {
    path: 'codingspace',
    element: withSuspense(Codingspage),
    children: [
      {
        index: true,
        element: withoutSuspense(SpaceReady),
      },
      {
        path: 'start',
        element: withoutSuspense(SpaceStart),
      },
      {
        path: 'finish',
        element: withoutSuspense(SpaceFinish),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
