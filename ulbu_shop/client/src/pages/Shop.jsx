import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { getToken } from '../util/manage-token';
import { getUser } from '../util/manage-token';

const Shop = () => {
    const token = getToken();
    const dispatch = useDispatch();

    if (token) {
        dispatch(authActions.login());
        const user = getUser(token);
        dispatch(authActions.setUser(user));
    }

    return (
        <div>
            Shopp
        </div>
    );
};

export default Shop;