import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page Test cases" , ()=>{
    // test case for heading
test('should load Contact component', () => {
  
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

// test case for button
// we can use it/test
it('should load Contact component', () => {
  
    render(<Contact/>);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
});

// test case for input placeholder
test('should load input placeholder name in Contact component', () => {
  
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
});

// test caase for 2 input boxes
test('should load 2 input boxes in Contact component', () => {
  
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes)
    // Assertion
    expect(inputBoxes.length).toBeGreaterThan(0);
    expect(inputBoxes.length).toBe(3);
    expect(inputBoxes.length).not.toBe(2);
    expect(inputBoxes[0]).toBeInTheDocument();
});

})