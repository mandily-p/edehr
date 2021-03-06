import moment from 'moment'
import camelcase from 'camelcase'
import fileDownload  from 'js-file-download'
import { pageDefs } from './ehr-defs'

export function getIncomingParams () {
  let search = window.location.search.substring(1)
  let params2 = {}
  let parts = search.split('&')
  parts.forEach(p => {
    let pair = p.split('=')
    params2[pair[0]] = decodeURIComponent(pair[1])
  })
  return params2
}

export function composeUrl (context, api) {
  let visitState = context.rootState.visit
  let apiUrl = visitState.apiUrl
  return `${apiUrl}/${api}/`
}

export function setApiError (context, msg) {
  context.commit('system/setApiError', msg, { root: true })
}

export function validTimeStr (text) {
  return /^(|0?[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(text)
}

export function validDayStr (text) {
  return /^([0-9]?)$/.test(text)
}


export function composeAxiosResponseError (error, msg) {
  msg += error.response.status ? ` status: ${error.response.status}` : ''
  msg += error.response.statusText ? ` ${error.response.statusText}` : ''
  msg += error.response.data ? ` ${error.response.data}` : error.message
  return msg
}

export function decoupleObject (obj) {
  if (obj) {
    let str = JSON.stringify(obj)
    // console.log('decouple object ', str)
    return JSON.parse(str)
  }
  return obj
}

export function removeEmptyProperties (obj) {
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === 'object') removeEmptyProperties(val)
    else if (val === undefined || val === null || val === '') delete obj[key]
  })
  return obj
}

export const SEED_MARK = 'isFromSeed'

export function ehrRemoveMarkedSeed (page) {
  let propertyKeys = Object.keys(page)
  propertyKeys.forEach(pKey => {
    let childOne = page[pKey]
    if (Array.isArray(childOne)) {
      page[pKey] = childOne.filter(c => {
        let isMarked = typeof c === 'object' && c[SEED_MARK] === true
        return !isMarked
      })
    }
  })
  // })
  return page
}

export function ehrMarkSeed (data) {
  let pageKeys = Object.keys(data)
  pageKeys.forEach(key => {
    let page = data[key]
    let propertyKeys = Object.keys(page)
    propertyKeys.forEach(pKey => {
      let childOne = page[pKey]
      if (Array.isArray(childOne)) {
        page[pKey] = childOne.map(c => {
          if (typeof c === 'object') {
            c[SEED_MARK] = true
          }
          return c
        })
      }
    })
  })
  return data
}

export function validateSeed (dataAsString) {
  let pageKeys = Object.keys(pageDefs)
  pageKeys.sort()
  try {
    let obj = JSON.parse(dataAsString)
    let keys = Object.keys(obj)
    if(!keys || keys.length == 0) {
      return { invalidMsg: 'Seed data can not be empty'}
    }
    let badKeys = []
    keys.forEach( key => {
      let found = pageKeys.find( pKey => pKey === key)
      if(!found) {
        badKeys.push(key)
      }
    })
    if(badKeys.length > 0) {
      let extras = badKeys.join(', ')
      return { invalidMsg: 'Data contains invalid keys: ' + extras }
    }
    return { seedObj: obj }
  }catch(err) {
    console.log('validateSeed: failed to parse seed data', err)
    return { invalidMsg: err.message}
  }
}


export function downloadSeedToFile (seedId, sSeedContent, ehrData) {
  let lastUpdate = sSeedContent.lastUpdateDate
  lastUpdate = moment(lastUpdate).format('YYYY-MM-DD')
  ehrData = JSON.stringify(ehrData,null,2)
  let fName = camelcase(sSeedContent.name)
  fName += sSeedContent.version ? '_' + sSeedContent.version : ''
  fName += '_' + lastUpdate
  fName += '.json'
  console.log('Download seed to ', fName, ehrData)
  fileDownload(ehrData, fName, 'application/json')
}


/**
 * prepareAssignmentPageDataForSave does two things
 * 1. It removes empty properties
 * 2. It removes marked seed data (array elements)
 * @param data
 * @return {*}
 */
export function prepareAssignmentPageDataForSave (aPage) {
  // console.log('prepareAssignmentPageDataForSave', JSON.stringify(aPage, null, 2))
  let cleanValue = removeEmptyProperties(aPage)
  cleanValue = ehrRemoveMarkedSeed(cleanValue)
  return cleanValue
}
export function ehrMergeEhrData (one, two) {
  one = one || {}
  two = two || {}
  let pageKeys = _ehrMergeObjectChildKeys(one, two)
  let results = {}
  pageKeys.forEach(key => {
    let pgFromOne = one[key]
    let pageFromTwo = two[key]
    let pg
    if (pgFromOne && pageFromTwo) {
      pg = _ehrMergeAtPageLevel(pgFromOne, pageFromTwo)
    } else if (pgFromOne && !pageFromTwo) {
      pg = pgFromOne
    } else if (!pgFromOne && pageFromTwo) {
      pg = pageFromTwo
    }
    results[key] = _sortObjByKeys(pg)
  })
  results = _sortObjByKeys(results)
  return results

  function _ehrMergeAtPageLevel (pgFromOne, pageFromTwo) {
    let keys = _ehrMergeObjectChildKeys(pgFromOne, pageFromTwo)
    let results = {}
    keys.forEach(key => {
      let childOne = pgFromOne[key]
      let childTwo = pageFromTwo[key]
      let child
      if (childOne && childTwo) {
        // concat arrays
        if (Array.isArray(childOne) && Array.isArray(childTwo)) {
          child = childOne.concat(childTwo)
        } else {
          // take the property from the second
          child = childTwo
        }
      } else if (childOne && !childTwo) {
        child = childOne
      } else if (!childOne && childTwo) {
        child = childTwo
      }
      results[key] = child
    })
    return results
  }

  function _sortObjByKeys (obj) {
    let keys = Object.keys(obj)
    let results = {}
    keys.sort()
    keys.forEach(k => {
      results[k] = obj[k]
    })
    return results
  }

  function _ehrMergeObjectChildKeys (obj1, obj2) {
    let pages1 = Object.keys(obj1)
    let pages2 = Object.keys(obj2)
    let combined = pages1.concat(pages2)
    combined.sort()
    return combined.filter(_uniqueFilter)
  }

  function _uniqueFilter (value, index, self) {
    return self.indexOf(value) === index
  }
}
