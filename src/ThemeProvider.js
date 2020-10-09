import React from 'react';
import GlobalContext from './context';

class ThemeProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            // Este es el modelo de su aplicación, una lista de todo
            todos: [ 
                {task : 'Tarea 1', user: 'manu'},
                {task : 'Tarea 2', user: 'manu'},
                {task : 'Tarea 3', user: ''},
                {task : 'Tarea 4', user: ''},
                {task : 'Tarea 5', user: ''},
                {task : 'Tarea 6', user: ''},
                {task : 'Tarea 7', user: ''},
            ],

            // Agrega tantas acciones (funciones) como quieras
            addTask: title => this.setState({ todos: this.state.todos.concat(title) }),
            removeTask: taskId => this.setState({ todos: this.state.todos.filter(item => item !== this.state.todos[taskId]) })
        };
    }
    render() {
        return (
            <GlobalContext.Provider value={this.state}>
            
                {this.props.children}

            </GlobalContext.Provider>
        );
    }
}


export default ThemeProvider;