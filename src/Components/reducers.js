import store from './store'
import $ from 'jquery'

let nextToDo = 0;
    const tasks=
    [
        {
            
        }
    ]
 
const taskReducer = (state=tasks,action) =>
{
    switch(action.type){
        case 'addTask':
            return[
                ...state,
                {
                    id: nextToDo+=1,
                    text: $('.form-control').val()
                }
            ]
        case 'removeTask':
             return[
                state = [],
                nextToDo = 0
               
            ]
            
        
        default:
            return state;
    }

}
export default taskReducer;