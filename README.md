# random


# parcel
- Dev Build
- Local Server
- HMR
- File Watching Algorithm - written in C++
- Caching - Fasrer Build 
- Imag Optimization
- Minification
- Bundling
- Compressing
- Consistant Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- Https
- Tree Shaking - remove unused code
- Different dev and pro bundles


# Munchy app
// Munchy application Basic wire
/* 
  - Header 
      -Logo
      -NavItems
  - Body
      -Search
      -CardContainer
            -RestroCard
                -img
                -name of the restaurant  -start rating
                -cuisines - delivery time
  - Footer
      -CopyRight
      -Links
      -Contact
     
  */


Two types of Export/Import

    -DEFAULT EXPORT/IMPORT
        - export default Component;
        - import Component from "./path"

    -NAMED EXPORT/IMPORT
        - export const Component
        - import {Component} from "./path"

# React Hooks
(Normal js utility functions)
useState to generate dynamic State variables in react
useEffect

# Routing in webapps
- Client side routing
- Server side routing



# Redux Toolkit
- Install libraries @reduxjs/toolkit and react-redux
- Build the store 
- Connect the store to the app
- Create a cart Slice to add items to the cart
- dispatch action
- selector

# types of testing
- Unit Testing
- Integration testing
- End to End testing (E2E testing)

# Setting up Testing in our App
- Install React testing library
- Install jest
- Install Babel dependencies
- Configure babel.config.js
- Config parcel config file to disable default babel transpilation
- Jest configuration
- install jsdom library
- install @babel/preset-react to make jsx worl in test cases
- include @babel/preset-react in to the babel.config.js
- install @testing-library/jest-dom