# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

# Background 

The Acme Store recently created a brand-new online shop to sell their line of watches (and maybe other stuff). In order to remain competitive in the cutthroat E-commerce ecosystem, the company decided that the online shop *must* use responsive design, so as to guarantee a clean, modern user experience across all devices. 

They asked me to do the job. Armed with a Sketch file, I went to work. 😎

# Process

## CSS

The first decision involved CSS implementation. There are various ways to style a React app, but for the sake of time and simplicity, I chose to create a stylesheet `style.css` and imported it into `index.html`.

## Breakpoints
I derived the 3 breakpoints from the Sketch mockup:
1. Mobile: `(max-width: 767px)`
2. Tablet: `(min-width: 768px) and (max-width: 1279px)`
3. Desktop: `(min-width: 1280px)`

The app has `min-width` of `320px`. For viewport `width` greater than `1280px`, the main content stops scaling and the `margin`s expand as the screen expands. 

## Images
Product images were also exported from the Sketch mockup. Only one image size was used (the largest) and scaled down accordingly. Experiments with using `srcset` to load different images at different screen sizes were unsuccessful given the time constraints.

## Shopping Cart
In order to display the shopping cart modal, I had to hack together some functionality. This required creating a new action type `TOGGLE_CART`. When dispatched, `TOGGLE_CART` toggles a new `cart` state property called `isCartOpen` which takes a `boolean` as a value. Based on the value of `isCartOpen` the app either displays the `<ProductsContainer>` or `<CartContainer>` component. 

Currently the shopping cart modal is set to empty, but will look grand once I implement responsive design on it as well. 🎨

## Demos

### Products Page

![](https://media.giphy.com/media/1jVKo2EABv5uKDhGXU/giphy.gif "Product Page")
### Shopping Cart
![](https://media.giphy.com/media/yNr0no7xfr7mXl1KKN/giphy.gif "Shopping Page")