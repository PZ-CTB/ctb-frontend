export type AuthData = {
  token: string;
};

export type LoginResponse = {
  auth_token: AuthData['token'];
};
