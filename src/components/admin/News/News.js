import React from 'react'
import './News.scss'
import moment from 'moment'
import { getArticles, getPortalNews } from '../../../actions'
import {
  updateArticle,
  changeTitle,
  changeBody,
  changeImage,
  deleteImage,
} from '../../../modules/editArticle'
import { connect } from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import Article from './components/Article'
import PortalNews from './components/PortalNews'
import PortalNewsMobile from './components/PortalNewsMobile'
import ReactFileReader from 'react-file-reader'

class News extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getArticles()
    !this.props.portalNewsIsLoaded && this.props.getPortalNews()
  }
  componentWillReceiveProps() {}
  handleChangeTitle = e => {
    this.props.changeTitle(e)
  }
  handleChangeBody = e => {
    this.props.changeBody(e)
  }
  handleChangeImage = e => {
    this.props.changeImage(e.base64[0])
    // console.log(e.base64[0])
  }
  handleDeleteImage = () => {
    this.props.deleteImage()
  }
  handleUpdateArticle = () => {
    this.props.updateArticle(
      this.props.editArticle.id,
      this.props.editArticle.title,
      this.props.editArticle.image,
      this.props.editArticle.body
    )
    setTimeout(() => {
      this.props.getArticles()
    }, 1000)
  }
  render() {
    return (
      <div>
        <div className="clearfix">
          <div className="col col-30 left">
            <div className="admin-block news-block-static-mobile">
              <div className="block-header">
                <div className="header-title news-title">Список новостей</div>
              </div>
              <div className="news-body">
                <PerfectScrollbar>
                  <div className="news-body-inner">
                    {this.props.isLoading && <AdminsLoader />}
                    {this.props.isLoaded &&
                      this.props.articles.map((article, index) => (
                        <Article
                          key={article.id}
                          id={article.id}
                          title={article.title}
                          date={article.date}
                          image={article.pictureBase64}
                          body={article.body}
                          isPinned={article.isPinned}
                        />
                      ))}
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="news-footer">
                <div
                  onClick={this.handleUpdateArticle}
                  className="settings-save schema-save"
                >
                  Добавить
                </div>
              </div>
            </div>
          </div>
          <div className="col col-70 right">
            <div className="admin-block">
              <div className="block-header">
                <div className="header-title edit-news-title">
                  Редактор:
                  <input
                    type={'text'}
                    className="article-header-title"
                    onChange={e => this.handleChangeTitle(e.target.value)}
                    value={this.props.editArticle.title}
                  />
                  <span className={'date'}>
                    {moment(new Date()).format('l')}
                  </span>
                </div>
              </div>
              <div className="news-body">
                <PerfectScrollbar>
                  <div className="article-inner">
                    <div
                      className="featured-image"
                      style={{
                        backgroundImage: `url(${this.props.editArticle.image})`,
                      }}
                    >
                      <div>
                        <ReactFileReader
                          fileTypes={['.jpg', '.png']}
                          base64={true}
                          multipleFiles={true}
                          handleFiles={this.handleChangeImage}
                        >
                          <div className="uppload-image" />
                        </ReactFileReader>
                        <div
                          className="delete-image"
                          onClick={this.handleDeleteImage}
                        />
                      </div>
                    </div>
                    <article>
                      <input
                        type={'text'}
                        className="article-title-body"
                        onChange={e => this.handleChangeTitle(e.target.value)}
                        value={this.props.editArticle.title}
                      />
                      <textarea
                        type={'text'}
                        className="article-body-textarea"
                        onChange={e => this.handleChangeBody(e.target.value)}
                        value={this.props.editArticle.body}
                      />
                      {/* <textarea
                        onChange={e => this.handleChangeBody(e.target.value)}
                        value={this.props.editArticle.body}
                      /> */}
                    </article>
                  </div>
                </PerfectScrollbar>
              </div>

              <div className="news-footer">
                <div
                  onClick={this.handleUpdateArticle}
                  className="settings-save schema-save"
                >
                  Опубликовать
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-block portal">
          <div className="block-header">
            <div className="header-title edit-news-title">Портал новостей</div>
          </div>
          <div className="news-body settings-body-desktop">
            <PerfectScrollbar>
              <div className="news-portal-inner">
                <table className="settings-table">
                  <tbody>
                    <tr>
                      <th>№</th>
                      <th>Ссылка на сайт</th>
                      <th>Статус</th>
                      <th />
                    </tr>
                    {this.props.portalNewsIsLoading && <ReportsLoader />}
                    {this.props.portalNewsIsLoaded &&
                      this.props.portalNews.map((portal, index) => (
                        <PortalNews
                          ind={index}
                          key={portal.id}
                          link={portal.link}
                          status={portal.status}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </div>
          <div className="news-body settings-body-mobile">
            <PerfectScrollbar className={'edit-admins-mobile'}>
              {this.props.portalNewsIsLoading && <AdminsLoader />}
              {this.props.portalNewsIsLoaded &&
                this.props.portalNews.map((portal, index) => (
                  <PortalNewsMobile
                    ind={index}
                    key={portal.id}
                    link={portal.link}
                    status={portal.status}
                  />
                ))}
            </PerfectScrollbar>
          </div>
          <div className="news-footer">
            <div className="settings-save schema-save news-save-portal">
              Сохранить одобрения
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.articles.isLoading,
      isLoaded: state.articles.isLoaded,
      articles: state.articles.articlesList,
      portalNewsIsLoading: state.portal.isLoading,
      portalNewsIsLoaded: state.portal.isLoaded,
      portalNews: state.portal.portalNews,
      editArticle: state.editArticle,
    }
  },
  {
    getArticles,
    getPortalNews,
    changeTitle,
    changeBody,
    updateArticle,
    changeImage,
    deleteImage,
  }
)(News)
