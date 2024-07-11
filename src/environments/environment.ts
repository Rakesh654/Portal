export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'e76ca0fd-0545-4b4f-ba26-aa96f8999f4a',
    },
  },
  apiConfig: {
    scopes: ['e76ca0fd-0545-4b4f-ba26-aa96f8999f4a'],
    // 'user.read'
    // 'openid',
    // 'profile',
    // 'offline_access',
    // 'user.read',
    // 'api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user',
    // uri: 'https://graph.microsoft.com/v1.0/me',
    uri: 'https://cloudlabs-api.azurewebsites.net/api',
    uriv2: 'https://cloudlabs-api.azurewebsites.net/api',
  },
  b2cPolicies: {
    names: {
      signUpSignIn:
        'https://cloudlabsqaai.b2clogin.com/cloudlabsqaai.onmicrosoft.com/B2C_1A_signup_signin_linkedin',
      resetPassword: '',
      editProfile: '',
    },
    authorities: {
      signUpSignIn: {
        authority:
          'https://cloudlabsqaai.b2clogin.com/cloudlabsqaai.onmicrosoft.com/B2C_1A_signup_signin_linkedin',
      },
      resetPassword: {
        authority: '',
      },
      editProfile: {
        authority: '',
      },
    },
    authorityDomain: 'https://cloudlabsqaai.b2clogin.com',
  },
};
