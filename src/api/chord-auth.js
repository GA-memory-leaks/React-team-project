import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChord = (user, chordData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create-chord',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      chord: {
        title: chordData.title,
        body: chordData.body
      }
    }
  })
}
