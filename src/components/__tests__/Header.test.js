import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";


test('should header component load with the login button ', () => {
  

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"})
    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();
})

// cart item test case
test('should header component load with the cart item ', () => {
  

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart (0)")
    const cartItems = screen.getByText(/Cart/)
    

    expect(cartItems).toBeInTheDocument();
})

// Loginbutton to Logout onClick

test('should change button Login to Logout on click ', () => {
  
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButtom = screen.getByRole("button" , {name:  "Logout"});

    expect(logoutButtom).toBeInTheDocument();
})

