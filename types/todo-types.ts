export interface TodoObject {
    todo: string,
    time: number,
    completed: boolean
}

export interface TodoStateInterface {
    todos: TodoObject[],
    errors: string
}