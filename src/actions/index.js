import {
  ADMINS_REQUEST,
  ADMINS_RESPONSE,
  INVESTORS_REQUEST,
  INVESTORS_RESPONSE,
  INVESTORS_REPORT_REQUEST,
  INVESTORS_REPORT_RESPONSE,
  INVESTITIONS_REPORT_REQUEST,
  INVESTITIONS_REPORT_RESPONSE,
  CHARGE_TABLE_REQUEST,
  CHARGE_TABLE_REPORT_RESPONSE,
  REQUEST_REQUEST_APPLICATIONS,
  RESPONSE_REQUEST_APPLICATIONS,
  REQUEST_HISTORY_APPLICATIONS,
  RESPONSE_HISTORY_APPLICATIONS,
  REQUEST_INVEST_PERIOD,
  RESPONSE_INVEST_PERIOD,
  REQUEST_SCHEMA_SETTINGS,
  RESPONSE_SCHEMA_SETTINGS,
  REQUEST_YIELD_LIST,
  RESPONSE_YIELD_LIST,
  REQEST_ARTICLES_LIST,
  RESPONSE_ARTICLES_LIST,
  REQUEST_PORTAL_NEWS,
  RESPONSE_PORTAL_NEWS,
  REQUEST_HOMEPAGE_DATA,
  RESPONSE_HOMEPAGE_DATA,
  ERROR_HOMEPAGE_DATA,
  AUTH_REQUEST,
  AUTH_RESPONSE,
  AUTH_ERROR,
  GET_CORSE_REQUEST,
  GET_CORSE_RESPONSE,
  GET_CORSE_HISTORY_REQUEST,
  GET_CORSE_HISTORY_RESPONSE,
  REQUEST_AGREEMENT,
  RESPONSE_AGREEMENT,
  REQUEST_DELETE_ARTICLE,
  RESPONSE_DELETE_ARTICLE,
  AUTH_INVESTOR_REQUEST,
  AUTH_INVESTOR_RESPONSE,
  REQUEST_INVESTOR_DATA,
  AUTH_INVESTOR_ERROR,
  AUTH_HIDE,
  INVESTOR_AUTH_HIDE,
  INVESTMENTS_REPORT_REQUEST,
  INVESTMENTS_REPORT_RESPONSE
} from "../constants";
import {
  getAdminsFromServer,
  getInvestorsFromServer,
  getInvestorsReportFromServer,
  getInvestitionsReportFromServer,
  getChargeTableFromServer,
  getRequestApplicationsFromServer,
  getHistoryApplicationsFromServer,
  getInvestPeriodFromServer,
  getSchemaSettingsFromServer,
  getYieldListFromServer,
  getArticlesFromServer,
  getPortalNewsFromServer,
  getAgreementfromServer,
  delSingleArticleOnServer,
  getInvestorDataFromServer,
  investmentsReportFromServer
} from "../backend/api";
import { parseJwt } from "../helpers/parseJwt";

export const authData = data => dispatch => {
  dispatch({
    type: AUTH_REQUEST
  });

  fetch("https://atc-bl.nadzor.online/bl198765/admin/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: data.id,
      password: data.password
    })
  })
    .then(res => {
      if (res.status < 400) {
        return dispatch({
          type: AUTH_RESPONSE,
          success: true
        });
      } else {
        return dispatch({
          type: AUTH_ERROR,
          success: false
        });
      }
    })
    .catch(error => {
      console.log(error.status);
      if (error.status < 400) {
        return dispatch({
          type: AUTH_RESPONSE,
          success: true
        });
      } else {
        return dispatch({
          type: AUTH_ERROR,
          success: false
        });
      }
    });
};

export const authDataInvestor = data => dispatch => {
  dispatch({
    type: AUTH_INVESTOR_REQUEST
  });

  fetch("https://atc-bl.nadzor.online/bl198765/investor/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.id,
      password: data.password
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: AUTH_INVESTOR_RESPONSE,
        investorSuccess: true
      });
      console.log(res);
      localStorage.setItem("token", res.jwt);
      dispatch({
        type: REQUEST_INVESTOR_DATA
      });
    })
    .then(() => getInvestorDataFromServer(localStorage.getItem("token")))
    .then(res => {
      return dispatch({
        type: "RESPONSE_iNVESTOR_DATA",
        payload: {
          investorHomePageData: res,
          isError: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: AUTH_INVESTOR_ERROR,
        investorSuccess: false
      });
    });
};

export const getHomePageAdminData = () => dispatch => {
  dispatch({
    type: REQUEST_HOMEPAGE_DATA
  });
  console.log(parseJwt(localStorage.getItem("token")));

  fetch("https://atc-bl.nadzor.online/bl198765/admin/platform/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: RESPONSE_HOMEPAGE_DATA,
        payload: {
          adminHomePageData: res,
          isError: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      return dispatch({
        type: ERROR_HOMEPAGE_DATA,
        payload: {
          isError: true
        }
      });
    });
};

export const getAdmins = () => dispatch => {
  dispatch({
    type: ADMINS_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getAdminsFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: ADMINS_RESPONSE,
      adminList: result
    });
  });
};

export const getAgreement = () => dispatch => {
  dispatch({
    type: REQUEST_AGREEMENT
  });
  const promise = new Promise(resolve => {
    resolve(getAgreementfromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_AGREEMENT,
      agreement: result
    });
  });
};

export const getInvestors = () => dispatch => {
  dispatch({
    type: INVESTORS_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestorsFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTORS_RESPONSE,
      investorsList: result
    });
  });
};

export const getCourse = () => dispatch => {
  dispatch({
    type: GET_CORSE_REQUEST
  });
  fetch("https://atc-bl.nadzor.online/bl198765/platform/rates")
    .then(res => res.json())
    .then(res => {
      return dispatch({ type: GET_CORSE_RESPONSE, course: res });
    });
};

export const getCourseHistory = () => dispatch => {
  dispatch({
    type: GET_CORSE_HISTORY_REQUEST
  });
  fetch("https://atc-bl.nadzor.online/bl198765/platform/ratesHistory?count=5")
    .then(res => res.json())
    .then(res => {
      return dispatch({ type: GET_CORSE_HISTORY_RESPONSE, courseHistory: res });
    });
};

export const getInvestorsReport = () => dispatch => {
  dispatch({
    type: INVESTORS_REPORT_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestorsReportFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTORS_REPORT_RESPONSE,
      investorsReports: result
    });
  });
};

export const getInvestitionsReport = () => dispatch => {
  dispatch({
    type: INVESTITIONS_REPORT_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getInvestitionsReportFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTITIONS_REPORT_RESPONSE,
      investitionsReports: result
    });
  });
};

export const getChargeTable = () => dispatch => {
  dispatch({
    type: CHARGE_TABLE_REQUEST
  });
  const promise = new Promise(resolve => {
    resolve(getChargeTableFromServer());
  });

  promise
    .then(result => {
      console.log(result);
      return dispatch({
        type: CHARGE_TABLE_REPORT_RESPONSE,
        chargeTable: result
      });
    })
    .catch(result => {
      console.log(result);
      return dispatch({
        type: CHARGE_TABLE_REPORT_RESPONSE,
        chargeTable: []
      });
    });
};

export const getRequestApplications = () => dispatch => {
  dispatch({
    type: REQUEST_REQUEST_APPLICATIONS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getRequestApplicationsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_REQUEST_APPLICATIONS,
      requestApplications: result
    });
  });
};

export const getHistoryApplications = () => dispatch => {
  dispatch({
    type: REQUEST_HISTORY_APPLICATIONS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getHistoryApplicationsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_HISTORY_APPLICATIONS,
      historyApplications: result
    });
  });
};

export const getInvestPeriod = () => dispatch => {
  dispatch({
    type: REQUEST_INVEST_PERIOD
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getInvestPeriodFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_INVEST_PERIOD,
      investPeriod: result
    });
  });
};

export const getSchemaSettings = () => dispatch => {
  dispatch({
    type: REQUEST_SCHEMA_SETTINGS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getSchemaSettingsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_SCHEMA_SETTINGS,
      schemaSettings: result
    });
  });
};

export const getYieldList = () => dispatch => {
  dispatch({
    type: REQUEST_YIELD_LIST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getYieldListFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_YIELD_LIST,
      schemaSettings: result
    });
  });
};

export const getArticles = () => dispatch => {
  dispatch({
    type: REQEST_ARTICLES_LIST
  });
  const promise = new Promise(resolve => {
    resolve(getArticlesFromServer());
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_ARTICLES_LIST,
      articlesList: result
    });
  });
};

export const delArticle = id => dispatch => {
  dispatch({
    type: REQUEST_DELETE_ARTICLE
  });
  const promise = new Promise(resolve => {
    resolve(delSingleArticleOnServer(id));
  });

  promise.then(result => {
    console.log(result, id);
    return dispatch({
      type: RESPONSE_DELETE_ARTICLE,
      deleted: id
    });
  });
};

export const getPortalNews = () => dispatch => {
  dispatch({
    type: REQUEST_PORTAL_NEWS
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getPortalNewsFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: RESPONSE_PORTAL_NEWS,
      portalNews: result
    });
  });
};

export const authHide = () => dispatch => {
  dispatch({
    type: AUTH_HIDE
  });
};

export const investorAuthHide = () => dispatch => {
  dispatch({
    type: INVESTOR_AUTH_HIDE
  });
};

export const investmentsReport = () => dispatch => {
  dispatch({
    type: INVESTMENTS_REPORT_REQUEST
  });
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(investmentsReportFromServer());
    }, 200);
  });

  promise.then(result => {
    console.log(result);
    return dispatch({
      type: INVESTMENTS_REPORT_RESPONSE,
      investments: result
    });
  });
};
