import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const ShoppingCartStore = createContext({
	items: [],
});

function shoppingCartReducers(state, action) {
	switch (action.type) {
		case "ADD_ITEM": {
			const updatedItems = [...state.items];

			const existingCartItemIndex = updatedItems.findIndex(
				(cartItem) => cartItem.id === action.payload
			);
			const existingCartItem = updatedItems[existingCartItemIndex];

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				const product = DUMMY_PRODUCTS.find(
					(product) => product.id === action.payload
				);
				updatedItems.push({
					id: action.payload,
					name: product.title,
					price: product.price,
					quantity: 1,
				});
			}

			return {
				...state,
				items: updatedItems,
			};
		}
		case "UPDATE_ITEM": {
			const updatedItems = [...state.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === action.payload.productId
			);

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};

			updatedItem.quantity += action.payload.amount;

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}

			return {
				...state,
				items: updatedItems,
			};
		}
		default:
			return { ...state };
	}
}

export default function ShoppingCartContext({ children }) {
	const initlialState = {
		items: [],
	};
	const [shoppingCartState, dispatch] = useReducer(
		shoppingCartReducers,
		initlialState
	);

	function handleAddItemToCart(id) {
		dispatch({
			type: "ADD_ITEM",
			payload: id,
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		dispatch({
			type: "UPDATE_ITEM",
			payload: {
				productId,
				amount,
			},
		});
	}

	const store = {
		items: shoppingCartState.items,
		handleUpdateCartItemQuantity: handleUpdateCartItemQuantity,
		handleAddItemToCart: handleAddItemToCart,
	};

	return (
		<ShoppingCartStore.Provider value={store}>
			{children}
		</ShoppingCartStore.Provider>
	);
}
