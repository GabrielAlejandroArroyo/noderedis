const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    // function list() {
    //     return store.list(TABLA);
    // }

    // function get(id) {
    //     return store.get(TABLA, id);
    // }

    function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.userName = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }
        return store.upsert(TABLA, authData);
    }

    return {
        // list,
        // get,
        upsert,
    };
}