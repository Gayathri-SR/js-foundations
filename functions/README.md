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