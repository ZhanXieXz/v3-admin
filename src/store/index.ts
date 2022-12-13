import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { Iuserinfo } from "../api/types/common";
import { getItem, setItem } from '../utils/storage'

const state = {
    userInfo: getItem<Iuserinfo>('userInfo')
}
console.log(state)
export type State = typeof state

export const store = createStore<State> ({
    state,
    mutations: {
        changeUserInfo (state, user) {
            console.log('user', user);
            state.userInfo = user
            setItem('userInfo', state.userInfo)
        }
    }
})