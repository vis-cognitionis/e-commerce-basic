# Eteration

It is a basic website where details can be seen along with filtering, sorting, searching and adding to cart features.

## Installation

To install and run the app on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/vis-cognitionis/eteration-case`
2. Install dependencies: `npm install`
3. To run the tests: `npm run test` This will run the tests and display the results in the console.

## Project Overview

On the homepage, users can filter and sort products or search among products using the search box. Using pagination, users can view product cards page by page. They can access detail page from any product card. They can add any product to the cart by selecting any product from the product detail page or the homepage. They can see the products in the basket and the total price on the site.

## Technologies 

<li> <a href="https://beta.reactjs.org/" target="_blank">React</a></li> 
<li> <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> </li> 
<li> <a href="https://tanstack.com/query/latest" target="_blank">TanStack React Query</a> </li> 
<li> <a href="https://mobx.js.org/" target="_blank">MobX</a> </li>
<li> <a href="https://reactrouter.com/en/main/" target="_blank">React Router v6</a> </li>
<li> <a href="https://mui.com/" target="_blank">Material UI</a> </li>
<li> <a href="https://react.dev/reference/react/createContext" target="_blank">React Context API</a> </li>
<li> <a href="https://react.dev/learn/reusing-logic-with-custom-hooks" target="_blank">React Custom Hooks</a> </li>
<li> <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank">Responsive Design</a> </li>

## Project Structure

The project is organized into the following directories:

- `src`: Contains the source code for the app
- `contexts`: Contains the context API that provides states for adding and removing products from the cart
- `core`: Contains resuable button, card and icon components as well as colors in the project
- `custom-hook`: Contains custom hook for displaying all products and providing functions such as filtering, sorting, searching and pagination
- `service`: Contains the API endpoints and Axios configurations with data interface and query configuration
- `view`: Contains all components of the project and routed pages
- `view-model`: Contains mobX store that provides global states used in the project

