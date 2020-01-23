# Welcome to React

<!-- <p class="codepen" data-height="308" data-theme-id="default" data-default-tab="html,result" data-user="samcarlinone" data-slug-hash="BayqdwG" style="height: 308px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Tags Demo">
  <span>See the Pen <a href="https://codepen.io/samcarlinone/pen/BayqdwG">
  HTML Tags Demo</a> by samcarlinone (<a href="https://codepen.io/samcarlinone">@samcarlinone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p> -->

So before we get started with React, let's take a quick look at some of the JavaScript syntax that might seem weird to Java and C people.

First off, semi-colons are optional. And so we aren't going to use them, save some wear and tear on your keyboard and all that.

### Variables & Types

In JS numbers and strings are mostly what you'd expect.

```js
// No difference between single and double quoted strings
singer = 'Bob Dylan'
actor = "Ryan Reynolds"

// Backtick quoted strings allow interpolation (second line)
articleHeader = 'Is ' + actor + ' better at acting than ' + singer + '?'
articleHeader = `Is ${actor} better at acting than ${singer}?`
// articleHeader will equal "Is Ryan Reynolds better at acting than Bob Dylan?"
// See how we don't have to worry about spaces and whatnot in the second version?

// All numbers in JS are floats
bankBalance = 5.50
groveCityCost = 12000

// Math operations are in the Math object
Math.sqrt(4) // = 2
```

When adding and working with data JS will try to do the best it can. Generally everything gets converted to strings, but it's best not to push this too far. (If you start seeing NaN you've goofed)

```js
// String + Number = String
'hi ' + 5 // = 'hi 5'
'hi ' * 4 // = NaN
```

By see, I mean see in the JS dev console (usually opened with F12). Generally a good way to debug is frequent use of `console.log`.

```js
bob = 'friend'
jay = 'foe'
hp = 12

console.log(bob, jay, hp)
// Try copying and running this in your dev console
```

### Objects & Arrays

Alright, hopefully you are feeling a bit more comfortable with basic types. But what about classes, OOP, and all the rest? Well there is a `class` keyword in JS, but it uses prototypal inheritance and should be avoided.

Instead we use functional programming. The idea is we start with JS objects, which are basically `Map`(s) from Java. 

They are essentially a collection of named properties.

```js
// JS object syntax { key: value }
obj = { name: 'Joe', age: 108 }

// If we know the property we can use dot access
obj.name // = 'Joe'

// Dynamic access uses square braces
obj['name'] // = 'Joe'
obj['age'] // = 108

// Dynamic access is how we use a key that's in a variable
checkAge = 'age'
obj[checkAge] // = 108
obj.checkAge // undefined

obj.age = 20
obj['age'] = 20
// obj = { name: 'Joe', age: 20}
// Ah, the benefits of youth potion
```

We can also nest objects, no problem.

```js
dog = { name: 'Olivia', breed: 'Golden' }
kennel = { size: 'Large', dog: dog }
// kennel = { size: 'Large', dog: { name: 'Olivia', breed: 'Golden' }}

kennel.size // = 'Large'
kennel.dog.breed // = 'Golden'

// See how above we added a key with the same name as the variable?
// JS will let us save some repetition (only when creating a new obj)
kennel = { size: 'Large', dog }
// kennel = { size: 'Large', dog: { name: 'Olivia', breed: 'Golden' }}

// Not a huge difference, just something to know
```

Again, feel free to type this code into the dev console and play around with it till you feel comfortable with some of these ideas.

JS is a very permissive language, so you can add properties to objects quite easily.

```js
joe = { car: 'Tesla' }

joe.income = 120000
// joe = { car: 'Tesla', income: 120000 }
```

Reading properties that don't exist can get more dicey, an object will return undefined, but undefined isn't an object. So if you try to chain property access where the root obj can be undefined things will go bad.

```js
ocean = { bay: { fish: { color: 'red' }}}
ocean.bay.fish.color // = 'red', ez pz

// But what if we are getting our data from a server
// And it hasn't loaded
ocean = undefined
ocean.bay //!!! throws ReferenceError !!!

// Don't worry though, an object is 'truthy' and undefined / null are 'falsy'
// So we can use - if - to see if an object exists

job = undefined
school = { cost: 1000000 }

job.salary // Reference Error again

// Prints 'No Job'
if (job) {
  console.log(job.salary)
} else {
  console.log('No Job')
}

// Prints 1000000
if (school) {
  console.log(school.cost)
} else {
  console.log('No School')
}
```

Alright, so objects in JS are bundles of data that we can modify on the fly and pack inside each other. Pretty useful, but what about sequential data? Do we have arrays? Of course we do.

```js
snoop = [3, 1, 1, 3]

snoop[0] // = 3
snoop[1] // = 1
snoop[10] // = undefined

snoop[1] = 10
// snoop = [3, 10, 1, 3]

snoop.length // = 4


// !!!NEVER DO THIS!!!
snoop[10] = 100
// snoop = [3, 10, 1, 3, empty x 6, 100]
// Very bad things will happen to you!
// REALLY BAD THINGS
```

### Functions

OK, now we have some cool ways to store data. But we don't really have ways to do much with that data yet. Well functions will take care of that.

```js
function LogDat(something) {
  console.log(something)
}

LogDat('test') // Prints 'test' to the console

// Functions can be stored in variables

bob = LogDat // Note the lack of ()
bob('bruh') // Prints 'bruh' to the console

// the above is not the same as

bob = LogDat() // this runs the function and puts the result in bob
// bob is undefined in this case since LogDat returns nothing
bob('bruh') // Like with objects, undefined won't play nice, error
```

But wait if we can store a function in a variable, could we pass that function to another function?

```js
// Adds a $ to numbers and ~ to text
function Decorate(str) {
  if (typeof str === 'number')
    return '$' + str
  else
    return '~' + str
}

Decorate(123) // = '$123'
Decorate('test') // = '~test'

// Runs a function on every element in the array, returns a new array with results
function OnEvery(arr, func) {
  result = []

  for (i = 0; i < arr.length; i++) {
    result[i] = func(arr[i])
  }

  return result
}

data = [1, 'hi', 4389, 'go']

// Remember if you are passing a function don't use parens
OnEvery(data, Decorate) // = ['$1', '~hi', '$4389', '~go']
```

Ok, that OnEvery seems like it could be useful. But before we see it in action, there is another JS shortcut you should know.

```js
// What if were going to pass are function to another function immediately?
OnEvery(
  data,
  function AbsolutelyNothing() {
    // Stupid, you so stupid!
  }
)

// That is a lot of typing, why does the word function have to be so long
// We also don't even care about the name of the function, since we're using it once
// Wait, we can simplify it!
OnEvery(data, () => {
  // Nothing here
})

// Wow, that probably looks weird if you've never seen it before.
// Let's break it down.

function TimesTwo(n) {
  return n * 2
}

TimesTwo = (n) => {
  return n * 2
}

// Ok, so these are called "arrow functions" cause of the arrow (=>)
// Right now they look pretty similar, but remember
// If we were going to immediately pass the function to another function
// It would be shorter

(n) => {
  return n * 2
}
```
Arrow functions also have a couple of tricks to make themselves even shorter. The complex one is the `{ }` trick. See how the function above is one line and doesn't do much but return a result? Well if we get rid of the curly braces after the arrow, the return becomes implied (note this only works with one line).

```js
(n) => {
  return n * 2
}

// is the same as

(n) => n * 2

// a lot shorter than what we started with, right?

// Not one line, can't get rid of the curly braces here
(n) => {
  n = n * 2
  return n + 1
}

```

Ok, one other trick with arrow functions before we get to the fun stuff. I know this seems like a lot, but you'll see these everywhere in modern React so I don't want you getting confused. Remember you can always come back here.

```js
// The paren trick

// No arguments, must have parentheses
() => 'test' // = 'test', remember that implicit return?

// 1 argument, can skip parentheses
(n) => n * 2 // fine
n => n * 2 // 😎 radical 

// >1 argument, must have parentheses again
(x, y) => y + x * 2 // cool
x, y => y + x * 2 // 🛑 whack, compile error!

// Look I don't make the rules.
// Take it up with the complaints department 🗑️
```

