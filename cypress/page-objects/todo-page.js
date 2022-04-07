export class TodoPage {
  open() {
    cy.visit('http://todomvc-app-for-testing.surge.sh');
  }

  addTodo(text) {
    cy.get('.new-todo').type(text);
  }

  toggleTodo(index) {
    cy.get(`.todo-list li:nth-child(${index}) .toggle`).click();
  }

  showOnlyCompletedTodos() {
    cy.contains('Completed').click();
  }

  showOnlyActiveTodos() {
    cy.contains('Active').click();
  }

  showAllTodos() {
    cy.contains('All').click();
  }

  clearCompleted() {
    cy.contains('Clear completed').click();
  }

  todoShouldHaveText(index, text) {
    cy.get(`.todo-list li:nth-child(${index}) label`).should('have.text', text);
  }

  numberOfTodosShouldBeVisible(number) {
    cy.get('.todo-list li').should('have.length', number);
  }

  todoShouldBeCompleted(index, completed) {
    cy.get(`.todo-list li:nth-child(${index}) label`).as('todoLabel');
    cy.get('@todoLabel').should(`${completed ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through');
  }

  todoShouldBeToggled(index, toggled) {
    cy.get(`.todo-list li:nth-child(${index}) label`).as('todoLabel');
    cy.get('@todoLabel').should(`${toggled ? '' : 'not.'}be.checked`);
  }
}
