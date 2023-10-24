import { json, useLoaderData } from "react-router-dom";
import CartList from "../components/CartList/CartList";
import { useDispatch } from "react-redux";
import { busyActions } from "../store/busy-slice";

const CartPage = () => {
    const dispatch = useDispatch();

    const data = useLoaderData();
    const orders = Object.values(data);
    const total = orders.reduce((sum, order) => sum += order.price, 0);

    dispatch(busyActions.setBusyState(false));

    return (
        <>
            <CartList orders={orders}/>
            Total: ${total}
        </>
    );
};

export default CartPage;

export const loader = async () => {

    const goodsURL = "https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Orders.json";

    const response = await fetch(goodsURL);

    if (!response.ok) {
        throw json({message: 'Error while loading ordered goods!'}, {status: 500});
    }

    return response;
};