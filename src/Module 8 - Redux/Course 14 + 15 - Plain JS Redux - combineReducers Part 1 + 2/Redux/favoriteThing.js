export function addFavoriteThing(thing){
    return{
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

export function removeFavoriteThing(thing){
    return{
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

export default function favoriteThingReducer(favoriteThing = [], action){
    switch(action.type){
        case "ADD_FAVORITE_THING":
            return{
                favoriteThing: [
                    ...favoriteThing,
                    action.payload]
            }
        case "REMOVE_FAVORITE_THING":{
            const updatedArray = favoriteThing.filter((thing) => {
                return(
                    thing.toLowerCase() !== action.payload.toLowerCase()
                )
            })
            return updatedArray
        }
        default:
            return favoriteThing
    }
}