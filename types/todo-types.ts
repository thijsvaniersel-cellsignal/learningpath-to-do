export interface TodoObject {
    todo: string,
    time: number,
    completed: boolean
}

export interface TodoStateInterface {
    todos: TodoObject[],
    errors: string
}

export interface Dropresult {
    addedIndex: number,
    payload: undefined | any,
    removedIndex: number
}