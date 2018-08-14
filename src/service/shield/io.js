const basicUrl = ''

export default {
  getTest () {
    /* istanbul ignore next */
    return fetch('./static/testA.json')
      .then(response => response.json())
      .catch(error => console.log(error))
  },
}
