import { render, screen } from "@testing-library/react"
import RestroCard, { withOpenNowLabel } from "../RestroCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"






test('should render RestroCard component using props data ', () => {

    render(<RestroCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Chinese Wok")

     expect(name).toBeInTheDocument();

  
})

// testing the withOpenNowLabel HOC


const WrappedComponent = withOpenNowLabel(RestroCard)
test('should render RestroCard component with withOpenNow Label ', () => {

    render(<WrappedComponent resData={MOCK_DATA} />)

    const label = screen.getByText("Open Now");
//   Assertion
expect(label).toBeInTheDocument();
})
