import { createStore } from 'vuex'

export default createStore({
    state:{
        subjects:[]
    },
    getters:{},
    mutations:{
        saveSubject(state, subject){
            state.subjects.push({
                'name': subject.name ,
                'credits':subject.credits,
                'mark':subject.mark
            })
            console.log(state.subjects);
        },
        

    }
})
