const Routes = {
  Home: () => `/`,
  Login: () => `/login`,
  Register: () => `/register`,
  ResetPassword: (uid?: string, token?: string) =>
    `/reset-password/${uid && token ? ':uid/:token' : ''}`,

  Statistics: () => `/statistics`,
  Dashboard: () => `/dashboard`,
  Profile: () => `/profile`,
};

export default Routes;
