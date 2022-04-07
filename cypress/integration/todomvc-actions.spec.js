/// <reference types="cypress" />

import {TodoPage} from '../page-objects/todo-page';

describe('Todo list actions test', () => {
  const todoPage = new TodoPage();

  beforeEach('Setup', () => {
    todoPage.open();
    todoPage.addTodo('Clean room{enter}');
  });

  it('add a new todo to the list', () => {
    todoPage.todoShouldHaveText(1, 'Clean room');
    todoPage.todoShouldBeToggled(1, false);
  });

  describe('Toggling todos', () => {
    it('toggle todo', () => {
      todoPage.toggleTodo(1);
      todoPage.todoShouldBeCompleted(1, true);
    });

    it('clear completed', () => {
      todoPage.toggleTodo(1);
      todoPage.clearCompleted();
      todoPage.numberOfTodosShouldBeVisible(0);
    });
  });
});
