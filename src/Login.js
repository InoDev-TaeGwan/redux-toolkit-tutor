import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/user";

const Login = () => {
  const dispatch = useDispatch(); // action을  보낼 수 있다.
  return (
    <div>
      <button
        onClick={() => {
          // dispatch login 리듀서에 데이터 를 저장
          dispatch(
            login({ name: "내 이름", age: 20, email: "email@email.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
