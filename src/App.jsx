import { useState } from 'react';
import CountContext from './contexts/ContextCount';
import PostList from './components/PostList';
import PostHome from './components/PostHome';
import PostCard from './components/postCard';


export default function App() {
  const person = {
    people: [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'Los Angeles' },
      { name: 'Mike', age: 35, city: 'Chicago' },
      { name: 'Sara', age: 28, city: 'Miami' },
      { name: 'Tom', age: 40, city: 'Houston' },
    ]
  };

  console.log(person);

  return (
    <CountContext.Provider value={{ person }}>
      <PostHome />
      <PostList />
      <PostCard />
    </CountContext.Provider>
  );
}
