import React from "react";
import css from "./index.module.scss";

const LoginPopup = () => {
    const exit = e => {
        e.preventDefault();
    };
    return (
        <div className={css.wrongData}>
            <div>Неверный ID или пароль</div>
            <span onClick={exit} className={css.closeWrong} />
        </div>
    );
};

export default LoginPopup
