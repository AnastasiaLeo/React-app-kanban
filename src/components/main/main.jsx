import React, {useState, useEffect} from "react";
import './main.css';
import BlockTask from "../block_task/block_task";

const test = [ {id:344,name:'happy',description:'me'},{id:2,name:'cat',description:'meow'} ]
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

    const setNewBacklog = (localArr) => {
        setArrBacklog(localArr);
        localStorage.backlog = JSON.stringify( localArr );
        //changeActiveTasks(localArr.length);
    }
    const setNewReady = (localArr) => {
        setArrReady(localArr);
        localStorage.ready = JSON.stringify( localArr );
    }
    const setNewInProgress = (localArr) => {
        setArrInProgress(localArr);
        localStorage.inProgress = JSON.stringify( localArr );
    }
    const setNewFinished = (localArr) => {
        setArrFinished(localArr);
        localStorage.finished = JSON.stringify( localArr );
        //changeFinishedTasks(arrFinished.length);
    }

    const handlerSelectReady = ( id ) => {  //в id элемент, который мы планируем удалить из предыдущего массива и вставить в новый
        const newArrAdding = grabTask( id, arrReady, arrBacklog );  //где добавили задачу
        const newArrDelete = giveAwayTask( id, arrBacklog );
        setNewReady(newArrAdding);
        setNewBacklog(newArrDelete);
    }
    const handlerSelectInProgress = ( id ) => {
        const newArrAdding = grabTask( id, arrInProgress, arrReady );  //где добавили задачу
        const newArrDelete = giveAwayTask( id, arrReady );
        setArrInProgress(newArrAdding);
        setNewReady(newArrDelete);
    }
    const handlerSelectFinished = ( id ) => {
        const newArrAdding = grabTask( id, arrFinished, arrInProgress );  //где добавили задачу
        const newArrDelete = giveAwayTask( id, arrInProgress );
        setArrFinished(newArrAdding);
        setArrInProgress(newArrDelete);
    }

    const clickShowDescription = (blockType) => {
        console.log(blockType);
    }

    useEffect( () => {
        //setArrBacklog(arrBacklog);
        changeActiveTasks(arrBacklog.length);
    } , [arrBacklog]);
    useEffect( () => {
        //setArrFinished(arrFinished);
        changeFinishedTasks(arrFinished.length);
    } , [arrFinished]);

    return(
        <div className="main"> 
            <div className="main__wrap container">
                <BlockTask arrTasks={arrBacklog} 
                blockType="Backlog"
                setNew = {setNewBacklog}
                clickShowDescription = {clickShowDescription}
                />
                <BlockTask arrTasks={arrReady} 
                blockType="Ready"
                setNew = {setNewReady}
                arrSelect={arrBacklog}
                handlerArrSelect={handlerSelectReady}
                clickShowDescription = {clickShowDescription}
                />
                <BlockTask arrTasks={arrInProgress} 
                blockType="In progress"
                setNew = {setNewInProgress}
                arrSelect={arrReady}
                handlerArrSelect={handlerSelectInProgress}
                clickShowDescription = {clickShowDescription}
                />
                <BlockTask arrTasks={arrFinished} 
                blockType="Finished"
                setNew = {setNewFinished}
                arrSelect={arrInProgress}
                handlerArrSelect={handlerSelectFinished}
                clickShowDescription = {clickShowDescription}
                /> 
            </div>
        </div>
    )
}

export default MainBody;

function grabTask( id, arrTo, arrFrom ){
    let newId = 0;
    let newObjectTask = {};
    arrTo.map((item) => {    //узнаем максимальный id чтобы подобрать следующий
        if ( newId < item.id ) { newId = item.id }
    })
    for (let key in arrFrom[id]){    //скопируем выбранную задачу в текущий лист
        newObjectTask[key] = arrFrom[id][key];
    }
    newObjectTask.id = newId+1; //поставим больше максимального индекса на 1
    const newArrAdding = [...arrTo, newObjectTask] //вставляем в конец
    return newArrAdding;
}

function giveAwayTask( id, arrFrom ){
    let newArrDelete = [...arrFrom];
    newArrDelete.splice(id,1);  //теперь удалим задачу из массива откуда забрали
    return newArrDelete;
}

