const API_URL = 'http://localhost:3333';

describe('frontend', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/api/users?page=1&pageSize=10`, {
      fixture: 'users.json',
    }).as('userList');
    cy.visit('/');
    cy.wait('@userList');
  });

  it('should display home page with the table and 10 users', () => {
    cy.get('[data-cy=brand-logo]').should('be.visible');
    cy.get('[data-cy=dashboard-menu]').should('be.visible');
    cy.get('[data-cy=new-user-button]').should('be.visible');
    cy.get('[data-cy=users-table-row]').should('have.length', 10);
  });

  it('should interact with all the modals, create and edit a user', () => {
    const userPayload = {
      username: 'testuser',
      name: 'prueba',
      lastName: 'last name prueba',
      email: 'test@email.com',
      phone: '+34677849302',
    };
    cy.intercept('POST', `${API_URL}/api/users`, {
      body: { statusCode: 201 },
    }).as('userRequest');
    cy.get('[data-cy=new-user-button]').click();
    // complete form
    cy.get('[data-cy=user-form-firstName]').type(userPayload.name);
    cy.get('[data-cy=user-form-lastName]').type(userPayload.lastName);
    cy.get('[data-cy=user-form-username]').type(userPayload.username);
    cy.get('[data-cy=user-form-email]').type(userPayload.email);
    cy.get('[data-cy=user-form-phone]').type(userPayload.phone);
    cy.get('[data-cy=user-form-submit]').click();
    cy.wait(['@userRequest', '@userList'])
      .then(([xhrObject]) => {
        const requestBody = xhrObject.request.body;
        expect(requestBody).to.be.eql(userPayload);
      });
    cy.get('[data-cy=user-form-firstName]').should('not.exist');
  });

  it.only('should edit one user in the table and see its courses', () => {
    const userPayload = {
      username: 'testuser',
      name: 'prueba',
      lastName: 'last name prueba',
      email: 'test@email.com',
      phone: '+34677849302',
    };
    cy.intercept('PUT', `${API_URL}/api/users/1d033f27-e8a5-4dfb-94df-7a2b6c599277`, {
      body: { statusCode: 202 },
    }).as('userEditRequest');
    // cy.get('[data-cy=users-table-row]').eq(3).click();
    cy.get('[data-cy=users-table-row]').eq(5).click();
    cy.get('[data-cy=profile-image]').should('be.visible');
    cy.get('[data-cy=profile-content]').should('have.length', 5);
    cy.get('[data-cy="tab-1"]').click();
    cy.get('[data-cy=progress-info-bar]').should('have.length', 4);
    cy.get('[data-cy="tab-0"]').click();
    cy.get('[data-cy=profile-edit-user]').click();
    cy.get('[data-cy=profile-cancel-edit]').click();
    cy.get('[data-cy=profile-edit-user]').click();
    // update user info
    cy.get('[data-cy=user-form-firstName]').clear().type(userPayload.name);
    cy.get('[data-cy=user-form-lastName]').clear().type(userPayload.lastName);
    cy.get('[data-cy=user-form-username]').clear().type(userPayload.username);
    cy.get('[data-cy=user-form-email]').clear().type(userPayload.email);
    cy.get('[data-cy=user-form-phone]').clear().type(userPayload.phone);

    cy.get('[data-cy=profile-submit-edit-user]').click();
    cy.wait('@userEditRequest')
      .then(xhrObject => {
        const requestBody = xhrObject.request.body;
        expect(requestBody).to.be.eql(userPayload);
      });
  });
});
