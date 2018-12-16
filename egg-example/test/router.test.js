// Good
const {
    app
} = require('egg-mock/bootstrap');

describe('good test', () => {
    before(() => doSomethingBefore());

    it('should redirect', () => {
        return app.httpRequest()
            .get('/')
            .expect(302);
    });
});