# React is 2020

Welcome ladies and gentlemen to the main event, here we will learn about the strange world of React. Unlimited power at your fingertips, at the small price of your sanity. At least that's what the detractors will tell you. Personally I think even for the beginner React is better than the alternatives and I hope by the end of this tutorial you will agree.

Unfortunately, React uses some magic called JSX so you won't be able to work in the console anymore. So I recommend getting a React project open and running first, and then coming back here. Alright, good? Then let us begin.

To get started with a React file you need to import React. But to understand imports one must understand exports.

```js
// In a file you have two types of exports

// Named exports
bob = 1294
export bob

// And default exports
fred = 1940
export default fred
```

Of course this isn't a complete rundown, but you get the gist. A file can obviously have only one default export, but may have as many named exports as one desires

```js
// This allows for a variety of imports but we'll focus on the most common cases

//Assume the above snippet is saved like this
// [code folder]
// |> theBoys.js (code from above)
// |> areBack.js (this snippet)

import fred from './theBoys' 
// Note that we need the ./ to tell JS that this is a file in our project
// We can leave off the .js at the end though

// We can use ../ to move up a folder, and repeat until we get high enough
// So if you had paths like 

// root/data/test.js
// root/display/mobile/render.js

// to import something from test.js in render.js
import allData from '../../data/test'

// Both of the above import the default export
// For default imports the name can be whatever
import defaultBoy from './theBoys'

// On the other hand named imports must match
import { bob } from './theBoys'

// Lastly, we can import libraries that we've added through npm
// These all live in node_modules and is where import will look
// if there is nothing at the beginning of a line
// like in this case with nothing preceding react

import React, { useState, useEffect } from 'react';

// Also see that we can use both a default and named imports in one go
```

We've just scratched the surface, but you shouldn't need to know much more than this. The curious can read more about importing and exporting at [MDN Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), but ignore anything about browser support and dynamic loading as your project is likely compiling the modules ahead of time. And none of that stuff will be relevant for at least another few years.

Alright, we have now imported react, are you ready let's put it to the test.

```jsx
import React from 'react'

function HelloWorld() {
  return <div> Hello World! </div>
}

// Awesome, now to use it.
// I'm assuming you are working in an existing project
// so export your new component
export default HelloWorld

// ----- ✂ different file ✂ ------
// and import into an existing page
import HelloWorld from './somewhere'

// and slam that bad boy in somewhere
<Page>
  <HelloWorld />
</Page>
```

So what's going on here? How did our function turn into HTML? Why throught the magic of React of course. The HTML in JS is called JSX and it gets automatically compiled down to regular JS when the project is built. And it plays very nicely with all the JS stuff you already know how to do.

Let's try making something a little more complex.

```jsx
import React from 'react'

function ToDoList() {

  const list = [
    'Bake Laundry',
    'Vacuum Cat',
    'Tidy Children',
  ]

  // we need to take these strings and turn them into React elements
  // Array.map to the rescue

  const listItems = list.map(item => <li key={item}>{item}</li>)

  return <div>
    <h2>My ToDo</h2>
    <ul>{listItems}</ul>
  </div>
}

// elsewhere
<ToDoList />
```

Alright, so first what's with the `<ul>{listItems}</ul>`? Well by default React interprets the content of JSX tags as plain text, to tell React that it is actual JS we need curly braces. Otherwise it would put the literal text listItems inside our unordered list tags.

```jsx
// Renders <p>CardBot</p>
function Dashboard() {
  const user = 'CardBot'

  return <p>{user}</p>
}

// Renders <p>user</p>
function Dashboard() {
  const user = 'CardBot'

  return <p>user</p>
}

// Did you spot the difference?
```

Next we can see the bit in our `<li key={item}>`, in regular HTML it would look like `<tag something="data">`. The `something="data"` is called an attribute. In React these are called props. They are passed to the React component as arguments. Some are built into React. For example, to set a class in react you can't do `<div class="container">` instead you must use `<div className="container">`. Most other HTML attributes are also available but often with similar slight changes, for these Google is your friend. Lastly, `key={item}` is a way for react to keep track of elements in an array. Each item should have a unique key, but this only applies to arrays of items, see how we don't need keys on the stuff in the return statement.

Now this is looking pretty cool, but what if we wanted to let the user click the items to strikethrough them. There are two ways of doing this, one way would be for the child list elements to detect clicks and pass the changes to the parent. But in this case the strikethrough is a cosmetic effect that we only care about in each element. To keep a local variable in a React element we use React hooks, specifically the state hook.

```jsx
import React, { useState } from 'react'

function ToDoItem(props) {
  const [done, setDone] = useState(false)
  // We create a state hook by calling useState
  // The value we pass into the function is the default state
  // done is the current value in the state
  // setDone is a function that when called will update the value of done
  // and rerender our component

  let text = props.children

  if (done) {
    text = <s>{props.children}</s>
  }

  return <li key={props.children} onClick={() => setDone(!done)}>
    {text}
  </li>
}

// From before
function ToDoList() {

  const list = [
    'Bake Laundry',
    'Vacuum Cat',
    'Tidy Children',
  ]

  // USE OUR NEW ITEM COMPONENT :)
  const listItems = list.map(item => <ToDoItem>{item}</ToDoItem>) 

  return <div>
    <h2>My ToDo</h2>
    <ul>{listItems}</ul>
  </div>
}

// elsewhere
<ToDoList />
```

Basically state is the way we create persistent variables in a React component. Note that we do this less often then you might think, because usually the data is getting passed down from a parent node that is loading data from persistent storage like a database. We see this in `ToDoItem`, which doesn't have a state variable for the text. Instead the text of each `ToDoItem` is passed down from the parent. Passing data from parent React elements to their children uses the `props` system, which we'll talk about in a moment, but first let's do a little more with state to try and really get a good understanding of how it works.

<p class="codepen" data-height="399" data-theme-id="default" data-default-tab="js,result" data-editable data-user="samcarlinone" data-slug-hash="NWPmNrY" style="height: 399px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React - Counter Demo">
  <span>See the Pen <a href="https://codepen.io/samcarlinone/pen/NWPmNrY">
  React - Counter Demo</a> by samcarlinone (<a href="https://codepen.io/samcarlinone">@samcarlinone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Alright, you should see a little CodePen demo above this. In the demo, we have a `Counter` component. It starts at zero and has plus and minus buttons. I want you to see if you can add some extra functionality. First add a randomize button that sets the count to a random int in the range \[0, 999\]. Then add some text after the count that tells me if the number is odd or even. I'll add the solution code below in a spoiler tag.

<div class="code-spoiler"></div>

```jsx
// Make sure you import useState along with React
// import React, { useState } from 'react'

// CodePen makes me use this instead, ignore this line
const { useState } = React;

function randomNumber() {
  return Math.floor(Math.random() * 1000)
}

function oddOrEven(num) {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

// Here is what we care about
function Counter() {
  const [count, setCount] = useState(0)

  return <div>
    <button onClick={() => setCount(count - 1)}>-</button>
    <span style={{padding: 12}}>{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(randomNumber())}>Random!</button>
    <div>This number is {oddOrEven(count)}</div>
  </div>
}

// Ignore this too, just bookkeeping stuff
ReactDOM.render(<Counter />, document.body)
```

And to give you some experience with using lambdas to make code shorter. Here is a version that uses lambdas.

```jsx
// Make sure you import useState along with React
// import React, { useState } from 'react'

// CodePen makes me use this instead, ignore this line
const { useState } = React;

// Here is what we care about
function Counter() {
  const [count, setCount] = useState(0)

  const randomNumber = () => Math.floor(Math.random() * 1000)

  const oddOrEven = num => num % 2 === 0 ? 'even' : 'odd'

  return <div>
    <button onClick={() => setCount(count - 1)}>-</button>
    <span style={{padding: 12}}>{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(randomNumber())}>Random!</button>
    <div>This number is {oddOrEven(count)}</div>
  </div>
}

// Ignore this too, just bookkeeping stuff
ReactDOM.render(<Counter />, document.body)
```

Alright, hopefully you can see how state is the way to keep some data that is local to a React element, but passing data between components is also quite important. Like we mentioned above React uses the props system, so let's dive into that.

<p class="codepen" data-height="500" data-theme-id="default" data-default-tab="js,result" data-editable data-user="samcarlinone" data-slug-hash="dyPEZRV" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React - Props Demo">
  <span>See the Pen <a href="https://codepen.io/samcarlinone/pen/dyPEZRV">
  React - Props Demo</a> by samcarlinone (<a href="https://codepen.io/samcarlinone">@samcarlinone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

All the props given to the element are included in the props object which is passed when the element is Rendered. Note that since variant isn't included on the second card it isn't defined on the props passed to the second element during render. So you always need to be aware of cases where your element might fail if the props aren't passed in properly (`PropTypes` tries to help with this, but that's out of scope for this doc).

Now if you've looked at a React codebase you might be wondering why you haven't seen `props` before. And the reason is all React projects use JS ES6 or later which introduced destructuring. Destructuring allows you to take an object and break it apart into a bunch of variables.

```js
const obj = { name: 'Bob', age: 10, favColor: 'red' }

console.log(name) // undefined

const { name, age, favColor } = obj

console.log(name) // 'Bob'

// It also works with function arguments

function Switch(props) {
  // ...
  console.log(props.mode, props.variant)
}

function Switch({ mode, variant }) {
  // ...
  console.log(mode, variant)
}
```

Now looking at these examples you might be wondering why we do it this way? After all, both of the examples look pretty similar. Well there are two main benefits. First, the more times you use props in your component the more typing you save by not having to prefix all those variables with `props.` But more important, you make it very easy for someone to glance at you component definition and see what props your component uses. In the first example you would have to read through the code in the function to see what props are used, whereas in the second version you can see that it looks at two properties named `mode` and `variant`.

So, hopefully you have a little better idea of what props are and how data flows downward through the component tree. But what if you wanted to pass data upwards? How could a child component pass data to it's parent? The answer is functions, we can use pass callbacks to child elements and have the child call the function to pass data to it's parent.

<p class="codepen" data-height="505" data-theme-id="default" data-default-tab="js,result" data-user="samcarlinone" data-slug-hash="jOEovEb" style="height: 505px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React - Props Demo II">
  <span>See the Pen <a href="https://codepen.io/samcarlinone/pen/jOEovEb">
  React - Props Demo II</a> by samcarlinone (<a href="https://codepen.io/samcarlinone">@samcarlinone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Hopefully this has made some of the stuff a bit clearer when it comes to how the mechanics of React work under the hood.
