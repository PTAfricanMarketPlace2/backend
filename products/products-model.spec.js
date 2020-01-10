const Products = require('./products-model.js');
const db = require('../database/dbConfig.js');


describe('products-model', () => {
    describe('add', () => {
        it('should  add a product into the db', async () => {
            await Products.add({productName:'product1', category_id:"1",user_id:"1",price:"$1.00", country:'KEN'});
           
            
            const products = await db('products')
            expect(products).toHaveLength(1)
        })
        beforeEach(async() => {
            await db('products').truncate()
        })
    })
    
})

