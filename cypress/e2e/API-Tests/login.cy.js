import loginData from "../../fixtures/login.json";
describe('Login', () => {
  it('Test User Login with Invalid Credentials', () => {
    cy.fixture('login').then((loginData) => {
      cy.request({
        method: 'POST',
        url: '/login', // adjust this if your login route differs
        failOnStatusCode: false, // prevent Cypress from failing on 4xx/5xx responses
        body: {
          email: loginData.email,
          password: loginData.password
        }
      }).should((response) => {
        expect(response.status).to.eq(401); // or whatever invalid creds return
        expect(response.body).to.have.property('error');
      });
    });
  });
});