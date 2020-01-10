const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users-model', () => {
    describe('add', () => {
        it('should add a user into the db', async () => {
            await Users.add({username:'user1',password:'password1', firstname:'first', lastname:'name', email:"user1@gmail.com"});
            await Users.add({username:'user2',password:'password2', firstname:'first', lastname:'name', email:"user2@gmail.com"});
            
            const users = await db('users')
            expect(users).toHaveLength(2)
        })
        beforeEach(async() => {
            await db('users').truncate()
        })
    })
    
})


