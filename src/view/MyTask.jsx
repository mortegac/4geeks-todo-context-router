import React from 'react';
import HeaderSection from '../components/HeaderSection'

import MyContext from '../context'

import TaskList from '../components/TaskList'

const MyTask = () =>{

    return(
        <MyContext.Consumer>
        {
            (context)=>{
                console.log('--CONTEXT--', context);

                return(
                    <>
                        <HeaderSection 
                            title='Mis Tareas' 
                            description='Estas son mis tareas' 
                        />

                        <TaskList 
                            listTask={ context.todos }
                            addTask={ context.addTask }
                            removeTask={ context.removeTask }
                            owner='manu'
                        />

                    </>
                )


            }
        }
        
        </MyContext.Consumer>
    )

}

export default MyTask; 



