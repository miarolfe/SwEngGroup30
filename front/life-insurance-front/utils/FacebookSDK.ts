// @ts-nocheck

declare global {
  interface Window {
      FB:any;
  }
}

declare global {
  interface Window {
      fbAsyncInit:any;
  }
}

let FB = window.FB; // ok now

export const initFacebookSdk = () => {
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '3792567281023179',
        cookie: true,
        xfbml: true,
        version: 'v16.0'
      });
      // Resolve the promise when the SDK is loaded
      resolve(() => {});
    };
  });
}

export const getFacebookLoginStatus = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login((response) => {
      resolve(response)        
    })
  })
}

export const fbLogout = () => {
  return new Promise((resolve, reject) => {
    window.FB.logout((response) => {
      resolve(response)        
    })
  })
}

export const fbUser = () => {
  return new Promise((resolve, reject) => {
    window.FB.api('/me', {fields: ['first_name', 'last_name', 'birthday', 'gender']}, function(response) {
      if (!!response.first_name) localStorage.setItem("faFirstName", response.first_name);
      if (!!response.last_name) localStorage.setItem("faLastName", response.last_name);
      if (!!response.birthday) localStorage.setItem("faBirthday", response.birthday);
      if (!!response.gender) localStorage.setItem("faGender", response.gender);
      resolve(response);
    })
  })
}