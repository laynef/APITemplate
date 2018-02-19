module.exports = {
    'development': {
        'username': 'laynefaler',
        'password': null,
        'database': process.env.DATABASE_NAME + '_development',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
    },
    'test': {
        'username': 'laynefaler',
        'password': null,
        'database': process.env.DATABASE_NAME + '_test',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
    },
    'production': {
        'username': 'laynefaler',
        'password': null,
        'database': process.env.DATABASE_NAME + '_production',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        'port': 5432,
    },
};
