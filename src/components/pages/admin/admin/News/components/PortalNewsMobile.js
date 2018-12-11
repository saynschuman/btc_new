import React from "react";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

export default props => (
  <div className="news-portal-inner">
    <table className={"settings-table reports-table"}>
      <tbody>
        <tr>
          <td>№</td>
          <td>{props.ind + 1}</td>
        </tr>
        <tr>
          <td>Ссылка на сайт</td>
          <td>
            <div className={"site-link"}>
              <a href={props.link}>{props.link}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td>Статус</td>
          <td>
            <CustomCheckbox />
          </td>
        </tr>
      </tbody>
    </table>
    <button className={"edit-admin-button delete-news-item"}>Удалить</button>
  </div>
);
