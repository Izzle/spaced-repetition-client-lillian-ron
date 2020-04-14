/// <reference types="Cypress" />

/**
 * @abstract: Know the name and the purpose of app
 *
 * @criteria
  As first time visiting user to the spaced repetition site:
  - I see the name of the learning app, and a brief description.
*/
describe(`User story: Application name and purpose`, function() {
  it('has h1 with title', () => {
    cy.visit('/')
    cy.get('h1')
      .should('contain', 'Learn Hiragana the better way!')
      .get('p')
      .should(
        'have.text',
        'Learning through spaced repetition will help you remember for good! To get started log in or sign up がんばれ！'
      )
  })
})
