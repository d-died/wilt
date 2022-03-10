import React from 'react'
import Nav from './components/Nav'
import MyPosts from './components/MyPosts'
import PostForm from './components/PostForm'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <div className="scollbox">
        <section className='home'>
          <Nav />
        </section>
        <section className='intro'>
          <h1>What I Learned Today</h1>
          <h3>Welcome! This is a place to both give and receive. 
            <br/>You give by sharing what you learned today. 
            <br/>You receive by learning what others discovered today! 
            <br/>Like Reddit but then we create connection through data visualization. 
            <br/>No matter how big, small, mind-blowing, mundane, a skill, a fact, young, aged, scary, joyful. 
            <br/>Feel free to share it all. </h3>
        </section>
        <section className='posts'>
          <MyPosts />
        </section>
        <section>
          <PostForm />
        </section>
        <section>
          <About />
        </section>
        
      </div>
    </div>
  );
}

export default App;