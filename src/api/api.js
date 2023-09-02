import axios from 'axios'
// token: 'ca513714-3eb1-4441-9362-4c0c5d4f4b02'
const instance = axios.create({
  baseURL: 'https://bootcamp-2022.devtest.ge/api/',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const skillsAPI = {
  getSkills() {
    return instance.get(`skills`).then(response => response.data)
  }
}

export const applicationAPI = {
  storeApplication(storeData) {
    return instance.post('application', { ...storeData })
  },
  getApplications(token) {
    return instance
      .get(`applications?token=${token}`)
      .then(response => response.data)
  }
}
