import { REQEST_ARTICLES_LIST, RESPONSE_ARTICLES_LIST, RESPONSE_DELETE_ARTICLE } from '../constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  articlesList: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQEST_ARTICLES_LIST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      }
    case RESPONSE_ARTICLES_LIST:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        articlesList: action.articlesList
      }
    case RESPONSE_DELETE_ARTICLE:
      return {
        ...state,
        articlesList: state.articlesList.filter(article => article.id !== action.deleted)
      }
    default:
      return state
  }
}
