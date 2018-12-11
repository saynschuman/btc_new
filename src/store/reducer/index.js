import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import loginInvestor from "../modules/loginInvestor"
import toggleMenu from "../modules/toggleMenu"
import investorHomePageGetData from "../modules/investorHomePageGetData"
import getCourse from "../modules/getCourse"
import getCourses from "../modules/getCourses"
import reports from "../modules/reports"
import settings from "../modules/settings"
import showPopups from "../modules/showPopups"
import hashRatePrice from "../modules/hashRatePrice"
import authData from "./../../components/pages/reducer/authData"
import course from "./../../components/pages/reducer/course"
import courseHistory from "./../../components/pages/reducer/courseHistory"
import adminHomePageData from "./../../components/pages/reducer/adminHomePageData"
import successLoginAdmin from "../../components/pages/modules/successLoginAdmin"
import toggleMobileMenu from "./../../components/pages/modules/toggleMobileMenu"

export default combineReducers({
  form,
  loginInvestor,
  toggleMenu,
  investorHomePageGetData,
  getCourse,
  getCourses,
  reports,
  settings,
  showPopups,
  hashRatePrice,
  authData,
  successLoginAdmin,
  toggleMobileMenu,
  adminHomePageData,
  course,
  courseHistory
})
