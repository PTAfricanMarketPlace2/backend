const Categories = require('./categories-model.js');
const db = require('../database/dbConfig.js');

describe('categories-model', () => {
    describe('find', () => {
        it('should find all categories in the db', async () => {
            const categories = await db('categories')
            expect(categories).toHaveLength(11)
        })
    })
    
})