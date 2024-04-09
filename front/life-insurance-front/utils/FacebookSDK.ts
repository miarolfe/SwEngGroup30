"use client"
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

export const initFacebookSdk = () => {
  if (typeof window !== undefined) {
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
}

export const getFacebookLoginStatus = () => {
  if (typeof window !== undefined) {

    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  }
};

export const fbLogin = () => {
  if (typeof window !== undefined) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.FB.login((response) => {
        resolve(response)        
      })
    })
  }
}

export const fbLogout = () => {
  if (typeof window !== undefined) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.FB.logout((response) => {
        resolve(response)        
      })
    })
  }
}

export const fbUser = () => {
  if (typeof window !== undefined) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.FB.api('/me', {fields: ['first_name', 'last_name', 'birthday', 'gender']}, function(response) {
        if (!!response.first_name) localStorage.setItem("faFirstName", response.first_name);
        if (!!response.last_name) localStorage.setItem("faLastName", response.last_name);
        if (!!response.birthday) localStorage.setItem("faBirthday", response.birthday);
        if (!!response.gender) localStorage.setItem("faGender", response.gender);
        resolve(response);
      })
    })
  }
}