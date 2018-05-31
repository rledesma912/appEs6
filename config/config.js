const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'app1'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/app1-development',
    storage: rootPath + '/data/app1-dev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'app1'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/app1-test',
    storage: rootPath + '/data/app1-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'app1'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/app1-production',
    storage: rootPath + 'data/app1-production'
  }
};

module.exports = config[env];
