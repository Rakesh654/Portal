export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'e76ca0fd-0545-4b4f-ba26-aa96f8999f4a',
    },
  },
  apiConfig: {
    scopes: ['https://cloudlabsqaai.onmicrosoft.com/api'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
  b2cPolicies: {
    names: {
      signUpSignIn: 'b2c_1_susi',
      resetPassword: 'b2c_1_reset',
      editProfile: 'b2c_1_edit_profile',
    },
    authorities: {
      signUpSignIn: {
        authority:
          'https://cloudlabsqaai.b2clogin.com/cloudlabsqaai.onmicrosoft.com/B2C_1A_signup_signin_linkedin',
      },
      resetPassword: {
        authority:
          'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset',
      },
      editProfile: {
        authority:
          'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile',
      },
    },
    authorityDomain: 'cloudlabsqaai.b2clogin.com',
  },
};
