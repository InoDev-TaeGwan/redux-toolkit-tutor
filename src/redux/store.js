import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReducer from "./theme";

/*
 * 리덕스는 스토어에 모든 state 상태값을 저장한다. 리덕스 안쓰면 부모 컴포넌트에 있는 변수를 자식 컴포넌트가 못 건든다.
 * 그래서 스토어라는 다른 곳에 변수를 저장하여 원격으로 들고 오는 것이다.
 *
 * configureStore 가 reducer를 감싸고 있다. 여기서 state를 관리할것이라는 뜻이다.
 * 그 다음 store를 프로젝트 루트 index.js 에 연결 시켜 준다.
 * 그리고 index.js 에다가 provider 라는 걸로 감싸주야 한다.
 * provider 는 store 가 리액트 앱 전체를 감싸도록 해준다.
 *
 * */
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
