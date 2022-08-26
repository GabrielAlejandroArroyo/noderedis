const db = {
    'user': [
        { id: '1', name: 'Carlos' },
    ]
};

async function list(tabla) {
    return db[tabla];
}
async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(table, id, name) {
    let newUser = { id: id, name: name }
    db[table].push(newUser)
}

async function remove(table, id) {
    db[table].splice(Number(id) - 1, 1)
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove,
}
