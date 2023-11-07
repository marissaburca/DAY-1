import { ADD_TO_FAV, REMOVE_FROM__FAV } from "../actions"

const initialState = {
        content:[],
    
}

const favoritesReducer =(state = initialState, action)=>{
    
    switch (action.type){
        case ADD_TO_FAV:
            return{
                ...state,
                    content:[...state.content, action.payload]
            }
        case REMOVE_FROM__FAV:
            return{
                ...state,
               
                    content: state.content.filter((content, i)=> i !== action.payload)
                

            }
        default: return state
    }
}

export default favoritesReducer