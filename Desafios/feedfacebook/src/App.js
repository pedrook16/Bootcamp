import React from 'react';

import Feed from './pages/Feed';
import PostList from './components/PostList';
import StyleGlobal from './styles/global';

function App() {
  return (
    <>
      <Feed />
      <PostList />
      <StyleGlobal />
    </>
  );
}

export default App;
