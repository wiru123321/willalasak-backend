// const crypto = require("crypto");
// module.exports = ({ env }) => ({
//   auth: {
//     secret:
//       env("ADMIN_JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
//   },
//   url: env("MY_HEROKU_URL"),
//   apiToken: {
//     salt: env("API_TOKEN_SALT") || crypto.randomBytes(16).toString("base64"),
//   },
//   transfer: {
//     token: {
//       salt:
//         env("TRANSFER_TOKEN_SALT") || crypto.randomBytes(16).toString("base64"),
//     },
//   },
// });

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
