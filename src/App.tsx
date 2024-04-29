import React from 'react';
import Header from './UI/header/Header';
import postAPI from './services/postService';
import PictureList from './components/pictureList';

function App() {
  const { data: posts } = postAPI.useFetchAllPostsQuery('');
  console.log(posts);
  return (
    <div className="App">
      <Header />
      <PictureList />
    </div>
  );
}

export default App;
