import React ,{useState}from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList'




// utility for creating unique Id




function App() {
  return (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
  );
}

export default App;
