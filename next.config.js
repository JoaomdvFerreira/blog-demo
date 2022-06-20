const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'johns',
        mongodb_password: 'rucbfk2Y0SgZqsiT',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'johns',
      mongodb_password: 'rucbfk2Y0SgZqsiT',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
