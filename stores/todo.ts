// Pinia
import { defineStore } from 'pinia'

// Types
import { TodoStateInterface, TodoObject, Dropresult } from '@/types/todo-types'

// Other store
import { useUserStore } from './user'

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
            // change status
            let index = this.getTodoIndex(todo)
            if(index !== -1){
                this.todos[index].completed = !todo.completed
            }

            // if all todos completed, change list status to true, otherwise to false
            this.todos.filter((el) => el.completed == false).length == 0 
                ? useUserStore().changeListStatus(true) 
                : useUserStore().changeListStatus(false)
            
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
        },
        deleteAllTodo(){
            this.todos = []
            useUserStore().listCompleted = true
        },
        completeAllTodo() {
            this.todos = this.todos.map((el) => {
                el.completed = true
                return el
            })
            useUserStore().listCompleted = true
        }
    },

    getters: {
        countUncompleted: (state) => state.todos.filter((el) => el.completed == false).length
    },
})