import React, {useState, useEffect} from "react";
import './main.css';
import BlockTask from "../block_task/block_task";

const test = [ {id:1,name:'happy',description:'me'},{id:2,name:'cat',description:'meow'} ]
const test1 = [ {id:1,name:'kissyou',description:'wow'},{id:2,name:'hugyou',description:'aww'} ]
const test2 = [ {id:1,name:'loveyou',description:'eah'},{id:2,name:'adoreyou',description:'ouch'} ]
const test3 = [ {id:1,name:'prettytoad',description:'eeeee'},{id:2,name:'greencrocodile',description:'vv'} ]
localStorage.setItem('backlog', JSON.stringify(test));
localStorage.setItem('ready', JSON.stringify(test1));
localStorage.setItem('inProgress', JSON.stringify(test2));
localStorage.setItem('finished', JSON.stringify(test3));

function MainBody ( { changeActiveTasks, changeFinishedTasks } ) { 

    let [ arrBacklog, setArrBacklog ] = useState( JSON.parse( localStorage.backlog ) );
    let [ arrReady, setArrReady ] = useState( JSON.parse( localStorage.ready ) );
    let [ arrInProgress, setArrInProgress ] = useState( JSON.parse( localStorage.inProgress ) );
    let [ arrFinished, setArrFinished ] = useState( JSON.parse( localStorage.finished ) );

    useEffect( () => {
        setArrBacklog(arrBacklog);
        changeActiveTasks(arrBacklog.length);
    } , [arrBacklog]);
    useEffect( () => {
        setArrReady(arrReady);
    } , [arrReady]);
    useEffect( () => {
        setArrInProgress(arrInProgress);
    } , [arrInProgress]);
    useEffect( () => {
        setArrFinished(arrFinished);
        changeFinishedTasks(arrFinished.length);
    } , [arrFinished]);

    return(
        <div className="main"> 
            <div className="main__wrap container">
                <BlockTask arrTasks={arrBacklog} 
                blockType="Backlog"
                />
                <BlockTask arrTasks={arrReady} 
                blockType="Ready"
                />
                <BlockTask arrTasks={arrInProgress} 
                blockType="In progress"
                />
                <BlockTask arrTasks={arrFinished} 
                blockType="Finished"
                /> 
            </div>
        </div>
    )
}

export default MainBody;