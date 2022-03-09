const request = require('supertest');

const app = require('../app');

describe('Test server endpoints', () => {
  // Success root endpoint
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // ADD USER
  test('POST Route /sign-up, status 200, content-type json', (done) => {
    request(app)
      .post('/sign-up')
      .expect(200)
      .expect('content-type', /json/)
      .send({ username: 'khaeld', hashedPassword: '123456789' })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // ADD RECIEPE
  test('POST Route /sign-up, status 200, content-type json', (done) => {
    request(app)
      .post('/user/addReciepes')
      .expect(200)
      .expect('content-type', /json/)
      .set('Cookie', 'info=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJraGFsZWQ0IiwiaWF0IjoxNjQ2ODQwOTY2fQ.zWgir_2-4H3_RdpUjYMgbITS461PGIfDv-ojLP4P5e0')
      .send({ title: 'fdfdf', detail: 'cheeze', userId: '1' })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // notFound
  test('GET Route /, status 404, content-type html', (done) => {
    request(app)
      .get('/khaled')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
