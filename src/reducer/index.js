import { combineReducers } from 'redux'
import toggleMobileMenu from '../modules/toggleMobileMenu'
import admins from './admins'
import investors from './investors'
import reports from './reports'
import articles from './articles'
import portal from './portal'
import adminHomePageData from './adminHomePageData'
import authData from './authData'
import course from './course'
import courseHistory from './courseHistory'
import agreement from './agreement'
import editArticle from '../modules/editArticle'
import investorHomePageData from './investorHomePageData'
import successLoginAdmin from '../modules/successLoginAdmin'

export default combineReducers({
  adminHomePageData,
  toggleMobileMenu,
  admins,
  investors,
  reports,
  articles,
  portal,
  authData,
  course,
  courseHistory,
  agreement,
  editArticle,
  investorHomePageData,
  successLoginAdmin,
})
