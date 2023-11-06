const initialState = {
    favorites:{
        content:[],
    }
}

const mainReducer =(state = initialState, action)=>{
    
    switch (action.type){
        case 'ADD_TO_FAV':
            return{
                ...state,
                favorites:{
                    ...state.favorites,
                    content:[...state.favorites.content, action.payload]
                }
            }
        case 'REMOVE_FROM_FAV':
            return{
                ...state,
                favorites:{
                    ...state.favorites,
                    content: state.favorites.content.filter((content, i)=> i !== action.payload)
                }

            }
        default: return state
    }
}

export default mainReducer