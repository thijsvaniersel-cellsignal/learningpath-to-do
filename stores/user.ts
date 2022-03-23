// Pinia
import { defineStore } from 'pinia'

// Types
import { UserObject } from '@/types/user-types'

// Store
export const useUserStore = defineStore('user', {
    state: () : UserObject => {
        return {          
            listCompleted: false
        }
    },

    actions: {
        changeListStatus(status : boolean){
            this.listCompleted = status
        }
    }    
})