const db = require('../db')

const actionType = {

    createActionType(name, description) {
        return db.asyncQuery(
            'INSERT INTO action_types(name, description) VALUES ($1, $2)', [`${name}`, `${description}`]
        );
    },

    getActionTypes() {
        return db.asyncQuery('SELECT * from action_types ORDER BY action_type_id ASC');
    }
}

module.exports = actionType;
