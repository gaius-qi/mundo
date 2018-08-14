const basicUrl = ''

export default {
  getTest () {
    return fetch('./static/testB.json')
      .then(response => response.json())
      .catch(error => console.log(error))
  },
}
