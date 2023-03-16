const Routes = {
  HomeUrl: () => `/`,
  AppUrl: () => `/app`,
  StatisticsUrl: () => `/app/statistics`,
  DashboardUrl: () => `/app/dashboard`,
  SandboxUrl: (user: string) => `/sandbox/${user}`,
  ResetPasswordUrl: (uid?: string, token?: string) =>
    `/reset-password/${uid && token ? ':uid/:token' : ''}`,
  LoginUrl: () => `/login`,
  RegisterUrl: () => `/register`,
};

export default Routes;
