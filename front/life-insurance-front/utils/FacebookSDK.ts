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
        appId: '913651487205024',
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