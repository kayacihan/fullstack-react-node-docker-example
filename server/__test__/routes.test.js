const supertest = require("supertest");
const request = supertest("http://localhost:3004")
let myID = "" // to use GET request after POST

describe('POST / ', function () {
  it('It should create from new Coffee', function (done) {
    request
      .post("/coffee/")
      .send({
        title: "demo",
        description: "demo",
        category: "iced",
        ingredients: [
          "demo"
        ]
      })
      .expect(201)
      .end(function (err, res) {
        myID = res.body.data._id
        expect(res.body.success).toBe(true)
        expect(res.body.data.title).toBe('demo')
        expect(res.body.data.description).toBe('demo')
        expect(res.body.data.category).toBe('iced')
        if (err) return done(err);
        return done();
      });
  }, 30000);
});

describe('GET /coffee/:id', function () {
  it('It should get coffee detail from id', function (done) {
    request
      .get('/coffee/' + myID)
      .expect(200)
      .then(res => {
        expect(res.body.success).toBe(true)
        expect(res.body.data.title).toBe('demo')
        expect(res.body.data.description).toBe('demo')
        expect(res.body.data.category).toBe('iced')
        done()
      })
      .catch(err => done(err))
  }, 30000);
});

describe('PUT /coffee/:id', function () {
  it('It should get coffee detail from id', function (done) {
    request
      .put('/coffee/' + myID)
      .send({
        title: "demo3",
        description: "demo3",
        category: "hot",
        ingredients: [
          "demo3"
        ]
      })
      .expect(201)
      .then(res => {
        expect(res.body.success).toBe(true)
        expect(res.body.data.title).toBe('demo3')
        expect(res.body.data.description).toBe('demo3')
        expect(res.body.data.category).toBe('hot')
        done()
      })
      .catch(err => done(err))
  }, 30000);
});

describe('DELETE /coffee/:id', function () {
  it('It should get coffee detail from id', function (done) {
    request
      .delete('/coffee/' + myID)
      .expect(201)
      .then(res => {
        expect(res.body.success).toBe(true)
        expect(res.body.data.title).toBe('demo3')
        expect(res.body.data.description).toBe('demo3')
        expect(res.body.data.category).toBe('hot')
        done()
      })
      .catch(err => done(err))
  }, 30000);
});
