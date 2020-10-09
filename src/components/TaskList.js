import React from 'react';


const TaskList = (props)=>{


    // props.listTask = array
    // props.addTask = funcion(title)
    // props.removeTask = funcion(indice)

    // props.owner='manu'

    const myTask = props.owner ?
        props.listTask.filter( (item) => item.user === props.owner )
        :props.listTask


    return(

        <ul>
            {
                myTask.map( (item, index) => {

                    return(

                        <li>
                            <span>{item.task} </span>
                            <span style={{color:'green'}}>{item.user}</span>
                            
                            <a style={{color:'red'}} 
                                onClick={ ()=>props.removeTask(index)  }> 
                            [X] </a>

                        </li>
                    )

                } )

            }
        
        </ul>
    )

}

export default TaskList;