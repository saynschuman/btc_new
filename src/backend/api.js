import {
  // adminList,
  // investorList,
  // InvestorReport,
  // InvestitionReport,
  // ChargeTable,
  // HistoryApplications,
  // SaleApplications,
  // investPeriod,
  // schemaSettings,
  // yieldList,
  // articleList,
  portalNews,
  investorDataFromServer
} from './mocks'

export const getHomePageAdminDataFromServer = path => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${path}`).then(res => {
    return fetch('https://atc-bl.nadzor.online/bl198765/admin/platform/', {
      headers: {
        Authorization: `Bearer ${res.jwt}`
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
  })
}

export const getAdminsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getInvestorsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investors/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getInvestorsReportFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investors/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getInvestitionsReportFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/reports/investments/?active=true', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getChargeTableFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/payouts/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getRequestApplicationsFromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/sellShares/?offset=0&count=30', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getHistoryApplicationsFromServer = () => {
  // return HistoryApplications;
  return []
}

export const getInvestPeriodFromServer = () => {
  // return investPeriod;
  return []
}

export const getSchemaSettingsFromServer = () => {
  // return schemaSettings;
  return []
}

export const getYieldListFromServer = () => {
  // return yieldList
  return fetch('https://atc-bl.nadzor.online/bl198765/admin/other/platformProfit', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getArticlesFromServer = () => {
  // return articleList
  return fetch('https://atc-bl.nadzor.online/bl198765/platform/news?offset=0&limit=10', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const getPortalNewsFromServer = () => {
  return portalNews
}

export const getAgreementfromServer = () => {
  return fetch('https://atc-bl.nadzor.online/bl198765/platform/agreement', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
}

export const delSingleArticleOnServer = id => {
  return fetch(`https://atc-bl.nadzor.online/bl198765/admin/news/${id}`, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => console.log(res))
}

export const updateArticleOnServer = (id, title, image, body) => {
  return fetch(`https://atc-bl.nadzor.online/bl198765/admin/news/${id}`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body,
      pictureBase64: image
    })
  }).then(res => console.log(res))
}

// investor

export const getInvestorDataFromServer = token => {
  console.log(token)
  return investorDataFromServer
}
