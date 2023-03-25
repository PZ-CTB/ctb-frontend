const Routes = {
  Home: () => `/`,
  Login: () => `/login`,
  Register: () => `/register`,
  ResetPassword: (uid?: string, token?: string) =>
    `/reset-password/${uid && token ? ':uid/:token' : ''}`,

  App: () => `/app`,
  Statistics: () => `/app/statistics`,
  Dashboard: () => `/app/dashboard`,

  Sandbox: (user: string) => `/sandbox/${user}`,
};

export default Routes;
