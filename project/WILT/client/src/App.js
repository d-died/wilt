import React from 'react'
import NavBar from './components/Nav/NavBar'
import MyPosts from './components/MyPosts'
import PostForm from './components/PostForm'
import About from './components/About'
import Intro from './components/Intro'


function App() {
  return (
    <div className="App">
      <div className="scollbox">
        <section id='home'>
          <NavBar />
        </section>
        <section id='intro'>
          <Intro />
        </section>
        <section id='posts'>
          <MyPosts />
        </section>
        <section>
          <PostForm />
        </section>
        <section id='about'>
          <About />
        </section>
        
      </div>
    </div>
  );
}


export default App;