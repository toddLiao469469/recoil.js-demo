import React from 'react'
import {useRecoilValue} from 'recoil'
import TodoItemCreator ,{todoListState} from './TodoItemCreator'
import TodoItem from './TodoItem'

function TodoList() {
    const todoList = useRecoilValue(todoListState);
  
    return (
      <>
        {/* <TodoListStats /> */}
        {/* <TodoListFilters /> */}
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList
  