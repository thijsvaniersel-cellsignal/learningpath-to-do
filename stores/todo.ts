// Pinia
import { defineStore } from 'pinia'

// Types
import { TodoStateInterface, TodoObject, Dropresult } from '@/types/todo-types'

export const useTodoStore = defineStore('todo', {
    state: () : TodoStateInterface => {
        return {          
          todos: [
            {
                todo: 'Fix my bicycle',
                time: 1647599347311,
                completed: false 
            },
            {
                todo: 'Create demo project with TypeScript and Nuxt 2',
                time: 1647599326119,
                completed: true 
            }                       
          ],
          errors: ''
        }
    },

    actions: {
        addToDo(todo : TodoObject){
            // check for empy string
            if(todo.todo.length == 0){
                this.errors = 'Do not add empty to do'
                return
            }
            
            // check if this todo exists
            if(this.todos.filter((el) => { return el.todo == todo.todo }).length > 0){
                this.errors = 'To do already exists'
                return
            }            

            this.todos.unshift(todo)
            this.errors = ''
        },
        deleteTodo(todo : TodoObject){
            
            this.errors = ''

            let index = this.getTodoIndex(todo)

            if(index !== -1){
                this.todos.splice(index, 1);
            }
        },
        todoChangeStatus(todo : TodoObject) {
            let index = this.getTodoIndex(todo)
            if(index !== -1){
                this.todos[index].completed = !todo.completed
            }
        },
        getTodoIndex(todo : TodoObject) {
            let index = this.todos.findIndex((el) => {
                return el.todo == todo.todo
            })  
            return index
        },
        changeIndex(dropresult : Dropresult) {
            let fromIndex : number = dropresult.removedIndex
            let toIndex : number = dropresult.addedIndex
            
            // cut out element
            const element = this.todos.splice(fromIndex, 1)[0];            
            this.todos.splice(toIndex, 0, element); 
        }
    }
})