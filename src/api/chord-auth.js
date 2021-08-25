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

export const oneChord = (user, chordId) => {
  console.log('URL is' + apiUrl + '/chords/' + chordId)
  return axios({
    method: 'GET',
    url: apiUrl + '/chords/' + chordId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateChord = (user, chordId, chordData) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/chords/' + chordId,
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
