const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users-model', () => {
    describe('find', () => {
        it('should find all users in the db', async () => {
            const users = await db('users')
            expect(users).toHaveLength(6)
        })
    })
    
})


