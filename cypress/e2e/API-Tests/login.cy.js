import {invalidCreds, validCreds} from "../../fixtures/login";

//Tests User Login API Endpoints with Positive and Negative Scenarios
describe('Login', () => {
  it('Test user can login with invalid credentials', () => {
      cy.request({
        method: 'POST',
        url: '/api/users/login', // adjusted to match your Express route structure
        failOnStatusCode: false,
        body: {
          email: invalidCreds.email,
          password: invalidCreds.password
        }
      }).should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'User not found');
      });
    
  });

  it('Test user can login with no credentials', () => {
      cy.request({
        method: 'POST',
        url: '/api/users/login', // adjusted to match your Express route structure
        failOnStatusCode: false,
        body: {
          email: "",
          password: ""
        }
      }).should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'Email and password are required');
      });
    
  });

  it('Test user can login with valid credentials', () => {
    
      cy.request({
        method: 'POST',
        url: '/api/users/login', // adjusted to match your Express route structure
        failOnStatusCode: false,
        body: {
          email: validCreds.email,
          password: validCreds.password
        }
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('message', 'Login successful');
      });
  });
});