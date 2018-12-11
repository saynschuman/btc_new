import React from "react";
import "./WrongData.scss";
import { authHide, investorAuthHide } from "../../../actions";
import { connect } from "react-redux";

const WrongData = props => {
  const exit = e => {
    e.preventDefault();
    props.authHide();
    props.investorAuthHide();
  };
  return (
    <div className="wrongData">
      {!props.success ? (
        <div>Неверный ID или пароль</div>
      ) : (
        <div style={{ color: "#9b9b9b" }}>
          Проверьте свою электронную почту, чтобы одобрить эту попытку входа!
        </div>
      )}
      {/* <div style={{ color: '#9b9b9b' }}>
        Проверьте свою электронную почту, чтобы одобрить эту попытку входа!
      </div> */}
      <span onClick={exit} className="closeWrong" href="/" />
    </div>
  );
};

export default connect(
  null,
  { authHide, investorAuthHide }
)(WrongData);
