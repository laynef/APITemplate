module.exports = {

    archived: (id) => ({
        archived: true,
        id: id,
    }),

    deleted: (id) => ({
        deleted: true,
        id: id,
    }),

};
