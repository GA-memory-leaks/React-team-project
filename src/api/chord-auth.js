import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChord = (user, chordData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/chords',
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

export const userChords = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/chords',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteChord = (user, chordId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/chords/' + chordId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
