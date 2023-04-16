const Routes = {
  Home: () => `/`,
  Login: () => `/login`,
  Register: () => `/register`,
  ResetPassword: (uid?: string, token?: string) =>
    `/reset-password/${uid && token ? ':uid/:token' : ''}`,

  App: () => `/app`,
  Statistics: () => `${Routes.App()}/statistics`,
  Dashboard: () => `${Routes.App()}/dashboard`,
  Profile: () => `${Routes.App()}/profile`,

  Sandbox: (user: string) => `/sandbox/${user}`,
};

export default Routes;
