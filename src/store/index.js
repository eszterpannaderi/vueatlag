import { createStore } from 'vuex'

export default createStore({
    state:{
        subjects:[]
    },
    getters:{},
    mutations:{
        saveSubject(state, subject){
            let maxId = Math.max(...state.subjects.map(x => x.id))
            state.subjects.push({
                'id': isFinite(maxId) ? maxId+1 : 1 ,
                'name': subject.name ,
                'credits':subject.credits,
                'mark':subject.mark
            })
            console.log(state.subjects);
        },
        

    }
})
