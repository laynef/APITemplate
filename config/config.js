module.exports = {
    'development': {
        'username': process.env.ROOT_USER_NAME,
        'password': null,
        'database': process.env.DATABASE_NAME + '_development',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
        'url': null,
    },
    'test': {
        'username': process.env.ROOT_USER_NAME,
        'password': null,
        'database': process.env.DATABASE_NAME + '_test',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
        'url': null,
    },
    'production': {
        'username': process.env.ROOT_USER_NAME,
        'password': null,
        'database': process.env.DATABASE_NAME + '_production',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
        'url': null,
    },
};
