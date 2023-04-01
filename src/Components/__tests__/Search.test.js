import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import Body from "../Body"


test('Search results on homepage', () => {

    const bodyUtil = render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)

    // const search = bodyUtil.getByTestId('search');
    const shimmer = bodyUtil.getByTestId('shimmer')
    
    expect(shimmer.children.length).toBe(20)

    // console.log(shimmer)
})

test('Products should loads on homepage', async () => {
    const bodyUtil = render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)

    await waitFor(() => expect(bodyUtil.getByTestId('search')))

    const prodList = bodyUtil.getByTestId('product-list')

    expect(prodList.children.length).toBe(20)
    // // const search = bodyUtil.getByTestId('search');
    // const shimmer = bodyUtil.getByTestId('shimmer')
    
    // expect(shimmer.children.length).toBe(20)

    // console.log(shimmer)
})

test('Search for an string on homepage', async () => {

    const body = render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)

    await waitFor(() => expect(body.getByTestId('search')))

   const input = body.getByTestId('search-input');

   fireEvent.change(input , {
            target:{value : 'hd'}
   } )

   const search = body.getByTestId('search')

   fireEvent.click(search)

   const prodList = body.getByTestId('product-list');

   expect(prodList.children.length).toBe(1)

})