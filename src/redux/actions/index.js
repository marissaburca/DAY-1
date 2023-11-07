export const ADD_TO_FAV='ADD_TO_FAV'
export const REMOVE_FROM__FAV='REMOVE_FROM__FAV'
export const GET_JOBS = 'GET_JOBS'

export const addToFavoritesAction= (data)=>{
    return{
        type: ADD_TO_FAV,
        payload: data
    }
}

export const removeFromFavoritesAction = (i)=>{
    return{
        type: REMOVE_FROM__FAV,
        payload: i
    }
}

export const handleSubmitAction= (query)=> {
   return async (dispatch) => {
       try {
      const res = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (res.ok) {
        const { data } = await res.json()
        console.log(data)
         dispatch({
         type: GET_JOBS,
         payload: data,
        })
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
    } 