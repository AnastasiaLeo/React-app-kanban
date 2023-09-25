import React, { useState } from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import MainBody from './components/main/main.jsx';

function App() {
  let [ activeTasks, setActiveTasks ] = useState(0);
  let [ finishedTasks, setFinishedTasks ] = useState(0);
  const changeActiveTasks = (activeTasks) => {
    setActiveTasks(activeTasks);
  }
  const changeFinishedTasks = (finishedTasks) => {
    setFinishedTasks(finishedTasks);
  }
  return (
    <div>
        <Header />
        <MainBody changeActiveTasks={changeActiveTasks} changeFinishedTasks={changeFinishedTasks} />
        <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} />
    </div>
  );
}

export default App;
//я тут
