
//Test Crud Operation for user to be able to read, edit and delete user
describe('User API Functionality', () => {
  let createdUserId;

  

  // Fetch all users
  it('Retrieves all registered users', () => {
    cy.request({
      method: 'GET',
      url: '/api/users',
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body.data).to.be.an('array');
    createdUserId = response.body.data[0]._id;

    });
  });

  // Edit the user by changing just one field
  it('Edits user with one updated field (e.g., name only)', () => {
    cy.fixture('user').then((user) => {
     cy.request({
      method: 'PUT',
      url: `/api/users/${createdUserId}`,
      failOnStatusCode: false,
      body: { name: user.name },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body.data.name).to.eq(user.name);
    });
    });
    
  });

  // Delete the user
  it('Deletes the created user', () => {
    cy.request({
      method: 'DELETE',
      url: `/api/users/${createdUserId}`,
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body).to.have.property('message', 'User deleted successfully');
    });
  });

  // Edit the user that do not exist
  it('Edits user that do not exist with invalid id', () => {
    cy.fixture('user').then((user) => {
     cy.request({
      method: 'PUT',
      url: `/api/users/${createdUserId}`,
      failOnStatusCode: false,
      body: { name: user.name },
    }).should((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.success).to.be.false;
      expect(response.body).to.have.property('message', 'User not found');
    });
    });
    
  });
});