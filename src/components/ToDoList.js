import React from 'react'
import { useState } from "react";

const ToDoList = () => {
    
    const [toDoList, setToDoList] = useState([]);
    const [completeList, setCompleteList] = useState([]);
    const [ darkMode, setDarkMode ] = React.useState( false );


    const handleAddJob = (event) => {
        const newJob = document.querySelector("#tarea").value;

        setToDoList(( prevToDoList ) =>{
            return [...prevToDoList, newJob];
        });
    };

    const handleRemoveJob = (event) => {
        const indexSelected = event.target.getAttribute('value');
        console.log('event', event.target.getAttribute('value'));
        toDoList.splice(indexSelected, 1);
        setToDoList((prevToDoList) => {
        // Spread operator
        return [...prevToDoList];
    });
    }; 

    const handleCompleteJob = (event) => {
        const indexSelected = event.target.getAttribute('value');
        const completeJob= toDoList[indexSelected];
        console.log('need', completeJob)
        setCompleteList((prevCompleteList) => {

            return[...prevCompleteList, completeJob]
        });

    };
    
    return (
        <>
            <div className={darkMode ? 'dark-mode' : ''}>
            <button onClick={ () => setDarkMode( !darkMode ) }>
                    {
                        darkMode
                            ? 'Modo claro'
                            : 'Modo oscuro'
                    }
            </button>    
            </div>
            <div>
                Tarea
                <input type='text' id='tarea' placeholder='Ingrese una tarea'></input>
                <button onClick={handleAddJob}>Agregar tarea</button>
            </div>
            <h1>Lista de tareas pendientes({} en total)</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Eliminar</th>
                        <th>Completar</th>

                    </tr>
                </thead>
                <tbody>
                    {toDoList.map((job, index) => {
                        return (
                            <tr key={index}>
                                <th >{job}</th>
                                <th ><button onClick={handleRemoveJob} value={index}>Eliminar</button></th>
                                <th ><button onClick={handleCompleteJob} value={index}>Completar</button></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h1>Lista de tareas completadas({} en total)</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {completeList.map((job, index) => {
                    return <tr key={index}><th>{job}</th></tr>;
                    })
                        
                    }
                </tbody>
            </table>
        </>
    )
}

export default ToDoList
