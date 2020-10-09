import React from 'react';
import HeaderSection from '../components/HeaderSection'
import { ListGroup } from 'react-bootstrap';

import MyContext from '../context.js';
import TaskList from '../components/TaskList.js'

const Tasks = () =>{

    return(
        <MyContext.Consumer>
        {
            (context)=>{
                console.log('--CONTEXT--', context);

                return(
                    <>
                        <HeaderSection 
                            title='Todas las Tareas' 
                            description='Listado completo de tareas' 
                        />

                        <TaskList 
                            listTask={ context.todos }
                            addTask={ context.addTask }
                            removeTask={ context.removeTask }
                        />

                    </>
                )


            }
        }
        
            
        
        </MyContext.Consumer>

    )

}

export default Tasks;