# JS for React

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

### Array Comprehensions

Alright, time for some of the cool stuff. We'll get to some actual React soon, but first, let's see what we can do with functions and JS arrays.

Imagine you have, say, a list of decks. These decks are going to be displayed somewhere in your application but you need to first filter them by some criteria.

```js
decks = [
  { title: 'The Wonderful World of Web', cards: 10 },
  { title: 'In the Eye of the Storm: Intro C++', cards: 93 },
  { title: 'Ayes and Eyes: Anatomy and Government', cards: 12 },
  { title: 'Big Paintins: Art History for DJs', cards: 420 },
  { title: 'Blind Eyes: How Democracy Failed Hip-Hop', cards: 69, archived: true },
]

// Alright we've got our deck objects in an array
// Each one has a title and cards, one has archived: true

// First let's do a search for decks containing the string 'Eye' in the title
// In JS a quick way to check for a substring is indexOf
// this function will return a -1 if a string is not found
// and the index of the first matching character otherwise

// Mozilla Developer Network has great documentation on all of the JS
// functions we'll be using, just search mdn indexOf for example

// First here is a long way
searchTerm = 'Eye'
searchResult = []

for (i = 0; i < decks.length; i++) {
  if (decks[i].title.indexOf(searchTerm) !== -1) {
    searchResult.push(decks[i]) // push adds an item to the end of an array
  }
}

// Here is a functional way
searchTerm = 'Eye'
searchResult = decks.filter(deck => deck.title.indexOf(searchTerm) !== -1) 

// returns [
// {title: "In the Eye of the Storm: Intro C++", cards: 93},
// {title: "Ayes and Eyes: Anatomy and Government", cards: 12},
// {title: "Blind Eyes: How Democracy Failed Hip-Hop", cards: 69
// , archived: true},
// ]
```

So let's break this down. First we are calling a method on JS arrays, `filter`. `filter` takes a function as an argument and returns a new array. That's important, note that deck didn't change, which is why we put the result in a new variable. Then inside the call to `filter` we have an arrow function that takes a single argument, gets the title and calls `indexOf` on it with the `searchTerm` defined on the previous line and checks if `indexOf` doesn't equal -1 (meaning a match was found).

This might not seem much shorter, but as things get more complex this type of approach gets more powerful. Since each function returns a new array we can chain functions.

```js
// Include decks array from earlier

cardsCount = decks
  .filter(deck => deck.title.indexOf(searchTerm) !== -1) // All decks with Eye in the title
  .map(deck => deck.cards)
  .reduce((total, deckCards) => total + deckCards) // = 174, the count of the filtered cards

// map returns a new array with the results of calling the function
// think of the OnEvery function we wrote earlier
// so [1, 2, 3].map(n => n * n) = [1, 4, 9]

// reduce gives the function each element one at a time, and the last returned value
// so [1, 2, 3].reduce((a, t) => a + t) = 6
// reduce is one of the most confusing ones, you probably won't use it
// except when you need to add up an array of numbers
```

You should be running this code to see it in action. See if you can modify the snippet above to filter out the one deck with archived true in addition to all the other stuff we are doing. You should get 105 as your new count. Remember that the order we call the functions on our array matters. You can't filter after you've transformed the decks into numbers for example.

For more on arrays go here: [https://jrsinclair.com/javascript-array-methods-cheat-sheet](https://jrsinclair.com/javascript-array-methods-cheat-sheet)

Unfortunately, that's all we have time for today. Look in the project to see if you can see the concepts we've talked about in action. Tune in next time for the complete explanation of React.