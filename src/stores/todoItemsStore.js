import {create} from "zustand";

export const useTodoItemsStore = create((set) => ({
    todoItems: [],

    addTodoItem: (text) =>
        set((state) => ({
            todoItems: [...state.todoItems, {id: Date.now(), text, done: false}]
        })),

    updateTodoItem: ({id, text, done}) =>
        set((state) => ({
            todoItems: [
                ...state.todoItems.filter((item) => item.id !== id),
                {id, text, done}
            ]
        })),

    removeTodoItem: (id) =>
        set((state) => ({
            todoItems: state.todoItems.filter((item) => item.id !== id)
        })),

    clear: () => set({ todoItems: [] })
}))