const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    it('should be testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

describe('GET/', () => {
    it('should return 200 OK',() => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        })
    })
})
// Same test using async...await:
// describe('GET/', () => {
//     it('should return 200 OK',async() => {
//         const res = await request(server).get('/')
//             expect(res.status).toBe(200);
//     })
// })

describe('GET/', () => {
    it('should be json',async() => {
        const res = await request(server).get('/')
            expect(res.type).toBe('application/json');
    })

    it('should return the correct object', async() => {
        const res = await request(server).get('/')
        expect(res.body).toEqual({api: "Up and running"})
    })
})
})