import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server'

test('The header text is onlineshoppingsite', () => {

    const view = render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
    )

        // const cart = view.getByTestId('cart');
        // // console.log(cart)
        // expect(cart.innerHTML).toBe('CART ( 0 )')

        const title = view.getByTestId('title');
        // console.log(title)
        expect(title.innerHTML).toBe('ONLINE_SHOPPING_STORE')
    
})

