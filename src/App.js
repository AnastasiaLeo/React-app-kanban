import React, { useState } from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import MainBody from './components/main/main.jsx';
import { Route, Routes } from 'react-router-dom';
import TextAreaDesription from "./components/textarea/textarea.jsx";
import NotFoundPage from "./components/not_found_page/not_found_page.jsx";

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
        <div className="main">
          <Routes>
            <Route path="/" element={<MainBody changeActiveTasks={changeActiveTasks} changeFinishedTasks={changeFinishedTasks}  />}></Route>
            <Route path="/:tasks/:taskId" element={<TextAreaDesription />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes> 
        </div>
        <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} />
    </div>
  );
}

export default App;
//я тут <MainBody changeActiveTasks={changeActiveTasks} changeFinishedTasks={changeFinishedTasks} />
{/* <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} /> */}
