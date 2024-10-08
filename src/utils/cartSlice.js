import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        // these items are basically cart items and we are setting it to an empty array
        items : [],
    },
    // reducers is basically an object, it contains different actions we can take like addItem,removeItem,clearCart etc 
    reducers : {
        // for each actions we'll have a reducer functions
        addItem : (state, action) =>{
            console.log("see here");
            console.log(current(state))
            // we are mutating the existing state 
               state.items.push(action.payload) 
             
        } ,
        removeItem : (state,action) => {
            state.items.pop();
        },
        clearCart : (state,action) =>{
            // we can clear the cart by using the logic of setting the array length to zero
            // length of zero will make it an empty array
           state.items.length = 0 ;
                        // but doing state = [] doesnt work
            // ALSO
            //  return a new state which will also work
            // return {items : []}
        },
    },
 });


//   we'll export two things from our slice
//  export our actions and our reducers

 export const {addItem,removeItem,clearCart} = cartSlice.actions;

 export default cartSlice.reducer;