import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import ShoppingCartContext from "./store/shopping-cart-store.jsx";

function App() {
	return (
		<ShoppingCartContext>
			<Header />
			<Shop />
		</ShoppingCartContext>
	);
}

export default App;
