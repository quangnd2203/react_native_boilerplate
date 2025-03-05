const appNetworkConfig = {
    success: 200,
    unauthorized: 401,
    badRequest: 400,
    notFound: 404,
    forbidden: 403,
    tooManyRequests: 429,
    errorValidate: 422,
    errorServer: 500,
    errorDisconnect: -1,

    connectionTimeout: 30000,
    receiveTimeout: 30000,
    keyAuthorization: 'Authorization',
};

export default appNetworkConfig;
