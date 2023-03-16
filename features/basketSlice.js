import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
        const index = state.items.findIndex((item)=> item.name === action.payload.name );

        let newBasket = [...state.items];

        
            newBasket.splice(index,1);
        
        

        state.items = newBasket;
    },
    
  },
})


export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;


export const selectBasketTotal = (state) => state.basket.items.reduce((total,item) =>
 (total+= item.price) ,0)

export default basketSlice.reducer;