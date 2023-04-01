import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import Products from '../Products'
import Header from "../Header"

test("Add to cart feature", async ()=>{

const productPage = render (<StaticRouter><Provider store={store}><Header/><Products/></Provider></StaticRouter>)

await waitFor(()=> expect(productPage.getByTestId('prod')));

const addBtn = productPage.getByTestId('addBtn')

fireEvent.click(addBtn)

const cart = productPage.getByTestId('cart')

expect(cart.innerHTML).toBe('<a href=\"/cart\">CART ( 1 )</a>')

})

