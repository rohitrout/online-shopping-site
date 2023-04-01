import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart : (state, action) =>{
            const index = state.items.findIndex((item)=>item.id === action.payload.id)
            if(index >= 0){
                state.items[index].cartQuantity +=1; 
            }else {
            const tempProduct = { ...action.payload, cartQuantity : 1}
            state.items.push(tempProduct)
            }
        },

        deleteFromCart : (state,action) => {
            const nextItems = state.items.filter(item=>item.id !== action.payload.id)
            state.items = nextItems;
        },

        decreaseCart : (state , action) => {
            const index = state.items.findIndex((item)=>item.id === action.payload.id)

            if(state.items[index].cartQuantity > 1){
                state.items[index].cartQuantity -= 1;
            }
            else if(state.items[index].cartQuantity === 1 ){
                const nextItems = state.items.filter(item=>item.id !== action.payload.id)
                state.items = nextItems;
            }
        }
    }
})

export const {addToCart, decreaseCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;