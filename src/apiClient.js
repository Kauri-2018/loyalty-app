import {get} from './utils/localStorage'

export function loginUser (userDetails) {
  return fetch('http://192.168.20.86:3000/api/v1/user/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userDetails)
  })
    .then(res => res.json())
}

export function getUser () {
  return get()
    .then(
      token => {
        return fetch('http://192.168.20.86:3000/api/v1/user/profile', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(res => res.json())
      })
}

export function checkinUser (passcode) {
  return get()
    .then(
      token => {
        return fetch('http://192.168.20.86:3000/api/v1/user/checkin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({passcode})
        })
          .then(res => res.json())
      })
}

export function getUserHistory () {
  return get()
    .then(
      token => {
        return fetch('http://192.168.20.86:3000/api/v1/user/history', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(res => res.json())
      })
}
