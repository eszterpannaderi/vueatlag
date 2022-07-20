import { createStore } from 'vuex'

export default createStore({
    state:{
        subjects:[],
        average:0
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
        CalculateAverage(state) {
            let sumOfCredits = 0;
            let sumOfMarks = 0;
            state.subjects.forEach((subject) => {
                sumOfCredits += subject.credits;
                sumOfMarks += subject.credits * subject.mark;
               
            })
            state.average = sumOfMarks / sumOfCredits;
            console.log(state.average)
            return state.average;
            },

         removeSubject(state,subject){
            state.subjects.splice(state.subjects.indexOf(subject),1)
        }

       
        

    }
})

