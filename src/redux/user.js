import { createSlice } from "@reduxjs/toolkit";

/*
 * createSlice 는 기존 redux 에서 createReducer 와 createAction 이 하던 일을 같이 해준다.
 *
 * 사용할 리듀서의 이름을 정하고 그걸 createSlice 로 지정해준다.
 * name 은 리듀서 이름 뭘로 할지 정하는곳
 * initialState 는 들어갈 데이터의 초기값 잡아주는 용도.
 * reducers 에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분
 *
 * 현재 이 프로젝트는 로그인 버튼을 클릭했을때 이름, 나이, 이메일이 변하게 할 것이다.
 *
 * 로그인 함수는 state 는 우리가 잡아놓은 초기값의 value 를 가져오는 역할을 하고
 * action 안에 payload 랑 type 이라는 친구가 있는데 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨주는 역할을 한다.
 *
 * 이제 리듀서를 만들었으니 스토어에 저장해야한다.
 *
 * */

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

// login 이라는 함수를 action 기능이 작동하도록 다른데서 쓸거라는 뜻
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
