import 'whatwg-fetch'

const verbs = {
  GET (url) {
    return fetch(url, {
      credentials: 'same-origin',
    })
  },

  POST (url, params) {
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  },
}

export default async (url, method = 'GET', params = {}) => {
  let res = await verbs[method](url, params)
  if (!res.ok) {
    return {
      success: false,
      message: 'Fetch Error',
    }
  }

  try {
    res = await res.json()
    return {
      success: true,
      res,
    }
  } catch (e) {
    return {
      success: false,
      message: 'Fetch Error',
    }
  }
}

