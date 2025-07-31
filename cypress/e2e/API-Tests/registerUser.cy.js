

//Tests User Registration API Endpoints with Positive and Negative Scenarios
describe('Registering User', () => {

  it('Test user register with no data', () => {
      cy.request({
        method: 'POST',
        url: '/api/users/register', // adjusted to match your Express route structure
        failOnStatusCode: false,
        body: {
          name: "",
          email: "",
          password: ""
        }
      }).should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'All fields are required');
      });
   
  });

  it('Test user register with one or few missing required data', () => {
    cy.fixture('register').then((registerData) => {
      cy.request({
        method: 'POST',
        url: '/api/users/register',
        failOnStatusCode: false,
        body: {
          email: registerData.email,
          password: registerData.password
        }
      }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('success', false);
      expect(response.body).to.have.property('message', 'All fields are required');

      });
    });
  });
  

  it('Test user registers with valid data using dynamic email', () => {
  cy.fixture('/api/users/register').then((registerData) => {
    // Add timestamp to email to avoid duplicate registration
    const dynamicEmail = `testuser${Date.now()}@example.com`;

    // Store generated user object for cleaner access in assertions
    const user = {
      name: registerData.name,
      email: dynamicEmail,
      password: registerData.password,
    };

    cy.request({
      method: 'POST',
      url: '/api/users/register',
      failOnStatusCode: false,
      body: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('success', true);
      expect(response.body.data).to.have.property('name', user.name);
      expect(response.body.data).to.have.property('email', user.email);
      expect(response.body.data).to.have.property('role', "author");
      expect(response.body.data).to.have.property('_id');
    });
  });
});

  it('Test user can register with same email data', () => {
    cy.fixture('register').then((registerData) => {
      cy.request({
        method: 'POST',
        url: '/api/users/register',
        failOnStatusCode: false,
        body: {
         name: registerData.name,
          email: registerData.email,
          password: registerData.password
        }
      }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('success', false);
      expect(response.body).to.have.property('message', 'Email is already registered');

      });
    });
  });
});