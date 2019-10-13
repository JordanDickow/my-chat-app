import React from 'react'
import io from 'socket.io-client'

 export const CTX = React.createContext()
/*
    msg: {
        from: 'user'
        msg: 'hi'
        topic: 'general'
}

    state: {
        topic1:{
                {msg}, {msg},{msg}, {newmsg}

        }
        topic2: {

        }
}
*/

const initState = {
     general: [
         {from: 'aaron', msg: 'hello'},
         {from: 'archer', msg: 'hello'},
          {from: 'arnold', msg: 'hello'},
          {from: 'Archimonde', msg: 'hello'},
           {from: 'Arthas', msg: 'hello'},
       ],
    topic2: [
        {from: 'aaron', msg: 'hello'},
        {from: 'archer', msg: 'hello'},
         {from: 'arnold', msg: 'hello'},
         {from: 'Archimonde', msg: 'hello'},
          {from: 'Arthas', msg: 'hello'}

     ]
}
function reducer(state, action) {
    const {from,msg,topic} = action.payload
    switch(action.type) {
        case 'MESSAGE RECIEVED':
        return {
            ...state,
            [topic]: [
                ...state[topic],
                {from,msg}
            ]
        }
        default:
            return state
    }
}

let socket

export default function Store(props) {

    if(!socket) {
        socket=io('3001')
    }

    const reducerHook = React.useReducer(reducer, initState)

    return(
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}
