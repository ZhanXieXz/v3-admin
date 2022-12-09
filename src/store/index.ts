import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

export interface IState {
    count: number
}


export const store = createStore<IState> ({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        changeCount (state, count) {
            state.count += count
        }
    }
})