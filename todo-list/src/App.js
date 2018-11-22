import React, { Component } from 'react';
import Footer from './dumb/Footer';
import AddTodo from './container/AddTodo';
import VisibleTodoList from './container/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
