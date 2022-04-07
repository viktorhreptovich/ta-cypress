/// <reference types="cypress" />

import { TodoPage } from '../page-objects/todo-page';

describe('Todo list filtering test', () => {
  const todoPage = new TodoPage();

  beforeEach('Setup', () => {
    todoPage.open();

    todoPage.addTodo('Clean room{enter}');
    todoPage.addTodo('Learn javascript{enter}');
    todoPage.addTodo('Use Cypress{enter}');
    todoPage.toggleTodo(2);
  });

  it('filter "Active"', () => {
    todoPage.showOnlyActiveTodos();
    todoPage.numberOfTodosShouldBeVisible(2);
  });

  it('filter "Completed"', () => {
    todoPage.showOnlyCompletedTodos();
    todoPage.numberOfTodosShouldBeVisible(1);
  });

  it('filter "All"', () => {
    todoPage.showOnlyCompletedTodos();
    todoPage.showAllTodos();
    todoPage.numberOfTodosShouldBeVisible(3);
  });
});
