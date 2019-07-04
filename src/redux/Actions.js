import * as ActionsType from './ActionsType';


export const Increment = (caption,count)=>{
   return {
        type:ActionsType.INCREMENT,
        value:{
            "caption":caption,
            "count":count
        }
   }
}

export const Decrement = (caption,count)=>{
    return {
         type:ActionsType.DECREMENT,
         value:{
            "caption":caption,
            "count":count
        }
    }
 }