const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(id, name) {
        store.upsert(TABLE, id, name)
    }

    function remove(id) {
        store.remove(TABLE, id)
    }


    return {
        list,
        get,
        upsert,
        remove,
    };
}
