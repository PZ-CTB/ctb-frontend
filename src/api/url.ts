const host = process.env.REACT_APP_API_HOST;

if (!host) throw new Error('REACT_APP_API_HOST missing.');

export { host };

export const apiBaseUrl = `${host}/api/v1`;
