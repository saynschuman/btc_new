import React from "react";
import "./WrongData.scss";

export default props => {
  // const exit = e => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   window.location.reload();
  // };
  return (
    <div className="wrongData">
      {!props.success ? (
        <div>Неверный ID или пароль</div>
      ) : (
        <div style={{ color: "green" }}>Проверьте почту!</div>
      )}
      {/*<span onClick={exit} className="closeWrong" href="/" />*/}
    </div>
  );
};
