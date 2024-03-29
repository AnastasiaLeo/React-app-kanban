import React, {useState, useEffect} from "react";
import './main.css';
import BlockTask from "../block_task/block_task";


const test = [ {id:344,name:'happy',description:'me',dateTask:new Date(2023,1,29).toISOString()},{id:2,name:'cat',description:'meow',dateTask:new Date(2023,5,29).toISOString()} ]
const test1 = [ {id:1,name:'red parrot',description:'wow',dateTask:new Date(2022,3,32).toISOString()},{id:2,name:'pumpkin',description:'aww',dateTask:new Date(2023,2,15).toISOString()} ]
const test2 = [ {id:1,name:'ssss',description:'eah',dateTask:new Date(2023,7,16).toISOString()},{id:2,name:'white duck',description:'ouch',dateTask:new Date(2022,13,22).toISOString()} ]
const test3 = [ {id:1,name:'prettytoad',description:'eeeee',dateTask:new Date(2023,8,2).toISOString()},{id:2,name:'greencrocodile',description:'vv',dateTask:new Date(2023,4,20).toISOString()} ]
localStorage.setItem('backlog', JSON.stringify(test));
localStorage.setItem('ready', JSON.stringify(test1));
localStorage.setItem('inProgress', JSON.stringify(test2));
localStorage.setItem('finished', JSON.stringify(test3));

function MainBody ( {changeActiveTasks, changeFinishedTasks} ) { 

    let [ arrBacklog, setArrBacklog ] = useState( JSON.parse( localStorage.backlog ) );
    let [ arrReady, setArrReady ] = useState( JSON.parse( localStorage.ready ) );
    let [ arrInProgress, setArrInProgress ] = useState( JSON.parse( localStorage.inProgress ) );
    let [ arrFinished, setArrFinished ] = useState( JSON.parse( localStorage.finished ) );
    // let [ showDescription, setshowDescription ] = useState(false);

    const setNewBacklog = (localArr) => {
        setArrBacklog(localArr);
        localStorage.backlog = JSON.stringify( localArr );
        changeActiveTasks(localArr.length);
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
        changeFinishedTasks(arrFinished.length);
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

    const clickShowDescription = (blockType, id) => {   //вызов описания по клику, убрать
        // setshowDescription(true);
    }

    useEffect( () => {
        changeActiveTasks(arrBacklog.length);
    } , [arrBacklog]);
    useEffect( () => {
        changeFinishedTasks(arrFinished.length);
    } , [arrFinished]);
    
    return(
        <>
            {/* <Header /> */}
            {/* <div className="main">  */}
                <div className="main__wrap container">
                    {/* { !showDescription ? (<> */}
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
                        {/* : (</>
                            <TextAreaDesription />
                        ) */}
                    
                </div>
            {/* </div> */}
            {/* <Footer activeTasks={arrBacklog.length} finishedTasks={arrFinished.length} />    */}
        </>
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

