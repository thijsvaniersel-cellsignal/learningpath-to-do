<template>
    <div>
        <Container @drop="onDrop">            
          <Draggable v-for="(todo, index) in store.todos" :key="index" :drag-class="'dragging'">
              <Todo :todo="todo"/> 
          </Draggable>
        </Container>
    </div>
</template>

<script lang="ts">
// Components
import Todo from '@/components/todo.vue'

// Store
import { useTodoStore } from '@/stores/todo'

// Types
import { Dropresult } from '@/types/todo-types'

export default {
    components: {
        Todo
    },

    setup() {
        
        // store
        const store = useTodoStore()

        // dragndrop, change index in store as well
        const onDrop = (dropresult : Dropresult) => {
            store.changeIndex(dropresult)
        }

        return {
            store,            
            onDrop
        }
    }
}
</script>
