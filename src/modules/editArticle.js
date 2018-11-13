import { updateArticleOnServer } from '../backend/api'

const EDIT_ARTICLE = 'EDIT_ARTICLE'
const START_UPDATE_ARTICLE = 'START_UPDATE_ARTICLE'
const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
const CHANGE_TITLE = 'CHANGE_TITLE'
const CHANGE_BODY = 'CHANGE_BODY'
const CHANGE_IMAGE = 'CHANGE_IMAGE'
const DELETE_IMAGE = 'DELETE_IMAGE'
const PIN = 'PIN'

const initialState = {
  id: '',
  title: '',
  image: '',
  body: '',
  isPinned: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_ARTICLE:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        body: action.payload.body
      }
    case START_UPDATE_ARTICLE:
      return {
        ...state,
        articleIsUpdating: true,
        articleIsUpdated: false
      }
    case UPDATE_ARTICLE:
      return {
        ...state,
        articleIsUpdating: false,
        articleIsUpdated: true,
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        body: action.payload.body
      }
    case PIN:
      return {
        ...state,
        isPinned: !state.isPinned
      }
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case CHANGE_BODY:
      return {
        ...state,
        body: action.body
      }
    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.image
      }
    case DELETE_IMAGE:
      return {
        ...state,
        image: ''
      }
    default:
      return state
  }
}

export const editArticle = (id, title, image, body) => dispatch => {
  dispatch({
    type: EDIT_ARTICLE,
    payload: {
      id,
      title,
      image,
      body
    }
  })
}

export const updateArticle = (id, title, image, body) => dispatch => {
  dispatch({
    type: 'START_UPDATE_ARTICLE'
  })
  const promise = new Promise(resolve => {
    resolve(updateArticleOnServer(id, title, image, body))
  })

  promise.then(result => {
    console.log(result, id)
    return dispatch({
      type: UPDATE_ARTICLE,
      payload: {
        id,
        title,
        image,
        body
      }
    })
  })
}

export const changeTitle = title => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    title
  })
}

export const changeBody = body => dispatch => {
  dispatch({
    type: CHANGE_BODY,
    body
  })
}

export const changeImage = image => dispatch => {
  dispatch({
    type: CHANGE_IMAGE,
    image
  })
}

export const deleteImage = image => dispatch => {
  dispatch({
    type: DELETE_IMAGE
  })
}

export const pin = (id, pin) => dispatch => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/news/${id}`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isPinned: pin
    })
  }).then(res => console.log(res))
  return dispatch({
    type: PIN,
    id
  })
}
