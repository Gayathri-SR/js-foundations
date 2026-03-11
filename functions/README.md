**Function declaration**
-> Fully hoisted
-> Can be called before defining

**Function expression**
-> Not hoisted
-> If called before, gives error
-> This is irrespective of using var, let, const

**Arrow functions**
-> Not hoisted
-> No own 'this'
-> Shorter syntax - cleaner for small functions

**Currying**
-> Converting a function that takes multiple arguments into a sequence of functions that each take one argument
Usage:
-> For reusable specialized functions
-> Cleaner functional composition
-> For FP-heavy environments
-> When configuration is required upfront

**Arrow vs Normal functions**
**Normal functions**
-> 'this' depends on how the function is called
-> Has an 'arguments' object
-> can use with 'new'
-> must use return
**Arrow functions**
-> They do not have their own 'this' - instead inherit it from the surrounding scope
-> No arguments. Instead use rest parameters
-> Cannot be used with 'new'
-> Can return values without return keyword

**Best use cases**
**Normal**
-> Object methods
-> Constructors
-> Functions needing 'this'
-> Event handlers in some cases
**Arrow**
-> Array methods
-> Small callbacks
-> Functional style code