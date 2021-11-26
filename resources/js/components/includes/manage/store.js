import { createStore } from 'redux'

const initialState = {
    bookroom_form_value:{
        name:'a',
        birth:'',
        cccd: '1',
        phone: '1',
        num:'1',
        day:'1'
    },
    sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }
}

const store = createStore(changeState)
export default store
