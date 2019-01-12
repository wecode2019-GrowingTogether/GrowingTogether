let token = '';

export default {

  setToken(t) {
    token = t;
  },

  signUp(profile) {
    return fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  signIn(credentials) {
    return fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  getSurveys() {
    return fetch('/api/survey', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json());
  },

  addSurvey() {
    return fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify()
    })
      .then(response => response.json());
  }
};