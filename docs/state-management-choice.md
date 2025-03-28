# 왜 우리는 TanStack Query와 Zustand를 선택했을까?


## Redux Toolkit의 문제점

---
이전에 Redux Toolkit을 사용한 프로젝트가 있었는데, 당시 경험을 통해 다음과 같은 문제점들을 발견하였습니다.

### 1. Store가 크고 복잡해짐

프로젝트 규모가 커질수록 Redux의 store 구조도 함께 비대해졌습니다.
상태와 데이터가 여러 slice로 분산되고 각 로직이 복잡하게 얽히면서,
전체 흐름을 파악하거나 디버깅하는 데 시간이 많이 소요되는 문제가 발생했습니다.

### 2. 상태 관리와 API 호출 코드가 지나치게 혼재됨

Redux Toolkit에서는 상태 관리를 위한 slice 정의와 API 요청을 위한 비동기 로직(createAsyncThunk)이
동일한 구조 안에 공존하게 됩니다.
특히 Polling과 같은 기능을 구현할 경우,
비동기 요청 처리, 주기적 호출, 상태 업데이트까지 모두 컴포넌트와 slice에서 직접 관리해야 하므로
코드가 쉽게 복잡해지고 유지보수에 부담이 생깁니다.

**Redux Toolkit 사용 예시**

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 요청 정의
export const fetchData = createAsyncThunk("data/fetch", async () => {
  const { data } = await axios.get("/api/data");
  return data;
});

interface DataState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: null,
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "알 수 없는 오류";
      });
  },
});

export default dataSlice.reducer;
```

```jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/dataSlice";

export default function PollingComponent() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData());

    const intervalId = setInterval(() => {
      dispatch(fetchData());
    }, 5000);

    return () => clearInterval(intervalId); // 메모리 누수 방지
  }, [dispatch]);

  if (status === "loading") return <p>로딩 중입니다...</p>;
  if (status === "failed") return <p>에러: {error}</p>;

  return (
    <div>
      <h1>Polling Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```


## 어떻게 개선할 수 있을까?

---
우리 팀은 이러한 Redux Toolkit의 복잡성을 해결하기 위해 Tanstack Query를 선택했습니다!

## TanStack Query란?

---
TanStack Query는 서버로부터의 데이터 요청, 캐싱, 그리고 캐시 제어까지 포함해 비동기 데이터를 효율적으로 관리할 수 있는 강력한 상태 관리 라이브러리입니다.

- **자동 캐싱 및 동기화 기능** 제공
- Polling, Retry 등 유용한 옵션 제공
- React Hooks 형태로 간단히 사용 가능

## TanStack Query의 Polling 구현 예시

---
TanStack Query는 Polling을 간편하게 구현할 수 있습니다.

아래는 Polling 구현 예시입니다.

```jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("/api/data");
  return response.data;
};

export default function PollingComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    refetchInterval: 5000, // 5초마다 자동 요청
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Polling Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### TanStack Query의 Polling 특징

- `refetchInterval` 옵션 설정만으로 자동 Polling 가능
- 요청 실패 시 자동 Retry
- 컴포넌트 언마운트 시 Polling 자동 중지

## API 호출 상태 관리 비교

---
### Redux Toolkit

Redux Toolkit을 사용할 당시에는 API 요청의 로딩, 성공, 실패 상태 등을 모두 직접 상태에 포함시키고, reducer에서 각각을 세세하게 관리해야 했습니다.

```js
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "알 수 없는 오류";
      });
  },
});
```

```jsx
const { data, status, error } = useSelector((state) => state.data);

if (status === "loading") return <p>Loading...</p>;
if (status === "failed") return <p>Error: {error}</p>;
if (status === "succeeded") return <pre>{JSON.stringify(data, null, 2)}</pre>;
```

### TanStack Query

반대로 TanStack Query는 API 호출에 필요한 isLoading, isError, isSuccess, isFetching 등의 상태를 자동으로 제공해주어, 별도로 상태를 정의하거나 reducer를 작성하지 않아도 되어 훨씬 효율적으로 상태를 관리할 수 있습니다.

```jsx
const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn });

if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error: {error.message}</p>;

return <pre>{JSON.stringify(data, null, 2)}</pre>;
```

<br/>

이처럼 스토어가 점점 비대해지고, 대부분이 API 호출 관련 코드로 구성되는 문제를 해결하고자, 저희 팀은 TanStack Query를 서버 상태 관리 도구로 도입하게 되었습니다.

<br/>

<div style="text-align:center; color:#999; font-size:10px; margin-top:16px;">✦ ✦ ✦</div>


## 우리가 클라이언트 상태 관리 도구로 Zustand를 선택한 이유

---
### TanStack Query를 사용하기로 결정한 상황!

우리 팀은 이미 **TanStack Query를 통해 서버 상태**(데이터 fetching, 캐싱 등)를 효과적으로 관리하기로 했습니다.

그렇다면 **클라이언트 상태를 굳이 무거운 Redux 구조를 유지해야 할까?** 라는 고민이 생겼고, 그 답이 바로 **Zustand**였습니다.

<br/>

### Redux Toolkit을 사용하면서 겪은 컴포넌트 복잡도 문제

Redux Toolkit을 사용하다 보면, 컴포넌트가 점점 무거워지고 복잡해지는 상황을 자주 마주하게 됩니다.

```js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/userSlice";

export default function UserInfo() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (status === "loading") return <p>로딩 중...</p>;
  if (status === "failed") return <p>에러: {error}</p>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}님 환영합니다</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

- **상태 접근**: `useSelector`로 store에서 필요한 상태를 선택
- **액션 디스패치**: `useDispatch`로 `fetchUser()`와 같은 액션 실행
- **사이드 이펙트 관리**: `useEffect`를 사용해 컴포넌트 마운트 시 API 요청 수행
- **UI 렌더링 분기**: 로딩, 에러, 성공 여부에 따라 조건 분기 처리

이 모든 과정을 컴포넌트 내부에서 직접 처리해야 하기 때문에,  
**UI에 집중해야 할 컴포넌트가 데이터 요청, 상태 관리, 비즈니스 로직까지 함께 떠안게 됩니다.**  
결과적으로 관심사가 분산되고, 컴포넌트의 복잡도는 자연스럽게 증가하게 됩니다.

게다가 Redux Toolkit은
- Slice를 생성하고
- Store를 구성하고
- `Provider`로 앱 전체에 주입한 후
- 각 컴포넌트에서 다시 `dispatch`와 `selector`로 연결하는

**상대적으로 무거운 설정 구조**를 요구합니다.  
이러한 구조는 명확하다는 장점이 있지만, **작은 기능 하나를 만들기에도 설정이 과도하게 많아지는 단점**이 있습니다.

<br/>

### Zustand를 사용하면 컴포넌트가 왜 간단해질까?

Zustand는 상태와 액션을 하나의 훅에서 함께 정의하고 사용할 수 있는 **가벼운 전역 상태 관리 도구**입니다.  
Redux Toolkit과 달리 별도의 Provider 설정이 없고, slice나 action 정의도 필요 없습니다.

아래는 동일한 기능을 Zustand로 구현한 예시입니다:

```ts
import { create } from "zustand";
import axios from "axios";

interface UserState {
  user: any;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get("/api/user");
      set({ user: data, loading: false });
    } catch (e: any) {
      set({ error: e.message ?? "에러 발생", loading: false });
    }
  },
}));
```

```tsx
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";

export default function UserInfo() {
  const { user, loading, error, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, []);

  // 이 부분은 Tanstack query로 분리
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}님 환영합니다</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

- `useDispatch`, `useSelector` 없이도 상태와 메서드를 훅 하나로 접근 가능
- 비즈니스 로직은 store 내부에서 처리되므로, 컴포넌트는 **순수하게 UI 렌더링에만 집중**할 수 있음

이처럼 **Zustand의 장점**에는 다음과 같은 요소들이 있습니다:

- 쉬운 사용법
- 작은 패키지 사이즈
- 적은 보일러 플레이트 코드

따라서 우리 팀은 복잡한 설정 없이도 전역 상태를 간결하게 관리할 수 있는 Zustand를 클라이언트 상태 관리 도구로 선택했습니다.


<br/>


### 🤔 번외 : Recoil과 Jotai는 고려하지 않았을까?

---
물론 Recoil과 Jotai도 클라이언트 상태 관리 도구로 검토했습니다.

하지만 당시 팀원들이 가장 익숙하게 다룰 수 있는 상태 관리 라이브러리는 Redux Toolkit이었고, Redux Toolkit이 Flux 패턴을 기반으로 하고 있는 만큼, 

**동일한 Flux 패턴을 사용하는 Zustand가 훨씬 익숙하고 적응 비용이 낮다고 판단했습니다.**