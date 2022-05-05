import {render, screen, cleanup } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header'



// test('full app rendering/navigating data page', async () => {
//     const history = createMemoryHistory();
//     render(
//       <Router location={history.location} navigator={history}>
//         <App />
//       </Router>,
//     )
//     const user = userEvent.setup()
//     expect(screen.getByText(/data/i)).toBeInTheDocument()
  
//     await user.click(screen.getByText(/data/i))
  
//     // check that the content changed to the new page
//     expect(screen.getByText(/Data/i)).toBeInTheDocument();
//     cleanup();
//   })

  // test('full app rendering/navigating comment page', async () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router location={history.location} navigator={history}>
  //       <App />
  //     </Router>,
  //   )
  //   const user = userEvent.setup()
  //   expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  
  //   await user.click(screen.getByText(/comment/i))
  
  //   // check that the content changed to the new page
  //   expect(screen.getByText(/Comment/i)).toBeInTheDocument()
  // })

  // test('full app rendering/navigating integration page', async () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router location={history.location} navigator={history}>
  //       <App />
  //     </Router>,
  //   )
  //   const user = userEvent.setup()
  //   expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  
  //   await user.click(screen.getByText(/integration/i))
  
  //   // check that the content changed to the new page
  //   expect(screen.getByText(/Integration/i)).toBeInTheDocument()
  // })

  // test('full app rendering/navigating graph page', async () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router location={history.location} navigator={history}>
  //       <App />
  //     </Router>,
  //   )
  //   const user = userEvent.setup()
  //   expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  
  //   await user.click(screen.getByText(/graph/i))
  
  //   // check that the content changed to the new page
  //   expect(screen.getByText(/Graph/i)).toBeInTheDocument()
  // })

  // test('rendering a component that uses useLocation', () => {
  //   const history = createMemoryHistory()
  //   const route = '/some-route'
  //   history.push(route)
  //   render(
  //     <Router location={history.location} navigator={history}>
  //       <SideMenu />
  //     </Router>,
  //   )
  
  //   expect(screen.getByTestId('menu')).toBeTruthy()
  // }) 

  test('should render Header component and render correct Dashboard title', () => {
    render(
      <MemoryRouter>
      <Header/>
      </MemoryRouter>
    )

    const title = screen.getByTestId("title-1");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Dashboard')
    cleanup();
  })

  test('should render data picker component', () => {
    render(
      <MemoryRouter>
      <Header/>
      </MemoryRouter>
    )

    const datePicker = screen.getByTestId("datePicker");
    expect(datePicker).toBeInTheDocument();
    cleanup();
  })

  it('uses correct src', async () => {
    const { getByAltText } = await render( <MemoryRouter>
      <Header/>
      </MemoryRouter>);

    const image = screen.getByAltText('avatar');
    expect(image).toHaveAttribute('src', 'unsplash_ILip77SbmOE.png')
})

 

