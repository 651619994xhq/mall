const testModule = {
    state: {
       a:1,
       b:2,
       c:3
    },

    mutations: {
        CHANGE_A:(state,payload)=>{
            state.a=payload
        }
    },

    actions: {

    }
}

export default testModule
