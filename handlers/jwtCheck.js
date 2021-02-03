const config = require('../config');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.Auth0.JWKS_URI
  }),
  audience: config.Auth0.Auth0_Audience,
  issuer: config.Auth0.Auth0_Issuer,
  algorithms: ['RS256']
});

module.exports = jwtCheck;