import React from "react";
import { useSelector } from "react-redux";

/*
 * useSelector 를 이용하면 우리가 만든 리듀서에 접근할 수 있다.
 * 리듀서에 있는 state 에 접근할건데, user 라고 이름 지어준 리듀서에 있는 state 에 접근 하겠다는 뜻이다.
 * 그리고 user 리듀서에 우리가 초기값을 어떻게 설장했는지 보면 value 라고 했다.
 * 그래서 user 에 있는 value 가져올거란 뜻이다.
 */

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p> Name :{user.name} </p>
      <p> Age : {user.age}</p>
      <p> Email : {user.email}</p>
    </div>
  );
};

export default Profile;
