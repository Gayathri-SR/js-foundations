**Object**
-> Almost everything is an object in JS - even functions
-> A collection of key-value pairs (Keys are always string even if "" is not written)
-> Mutable - even if declared with const, properties can be modified
-> Entire object cannot be reassigned

**Accessing properties of an object**
-> Dot notation
-> Bracket notation - recommended when key is dynamic, has spaces or if starts with a number

**Note about 'this'**
-> Inside objects, 'this' refers to the object calling the method

**Object creation**
-> Object literal
-> Constructor function
-> Class syntax

**Passing objects**
-> Objects are passed by reference
-> When b=a, both point to the same memory location

**Shallow copy**
-> Creates a new object/array with copies of top level properties from the original
-> Nested objects/properties are not duplicated...instead shared by reference - changes to the nested values in copy affects the original
-> Fast, lightweight
-> Use for flat objects or when sharing nested data is intentional

**Deep copy**
-> Completely independent copy of the original object/array - changes to the copy do not affect the original
-> slower, but handles nested structures safely
-> Use when data integrity is critical (Eg - React state management)
**Limitations**
-> JSON.parse(JSON.stringify()) fails with functions, undefined, Symbol or circular references
-> Use structuredClone() for deep copies (in modern browsers)

**for...in loop**
-> Iterates over all enumerable, non-symbol properties of an object, including inherited ones

**Object.keys** and **Object.values**
-> Returns an array of an object's own enumerable property names.
-> Use for-each or for-of to iterate

**Object.enties**
-> Returns an array of key-value pairs
-> Use destructuring with for-of or forEach

**Destructuring**
-> An ES6 feature that allows unpacking of values from arrays/properties from objects into distinct variables
-> Makes code more concise and readable

**Object destructuring**
-> Extract properties from an object into variables
-> Same can be re-assigned to different variable names using a colon

**Nested destructuring**
-> Extract deeply nested properties

**Default values**
-> Provide fallback values if a property or array element is missing

**Object freezing**
-> Prevents modification

**Prototypes**
-> Every object has an internal [[Prototype]]
Eg : const obj= {};
When we check
obj.__proto__ === Object.prototype -> it returns true
-> When we access obj.toString(), it comes from Object.prototype
-> They enable inheritance and shared behavior among objects
**Prototype chain**
-> When accessing a property, JS checks the object first, then it's prototype, then the prototype's prototype, until it reaches Object.prototype
(whose prototype is null)
**Shared methods**
-> Methods defined on prototype are shared across all instances, saving memory
**Dynamic updates**
-> Changin a prototype after object creation affects all instances
**Note**
-> Modern JS uses 'class' syntax as syntactic sugar over prototypes, but it works the same under the hood

**object vs map**
**Objects**
-> Keys become strings
-> For simple, plain Data structures
-> Used for structured data
-> Use when native JS support required
-> When working with small, static data eith string keys
**Map**
-> Keys can be any type
-> Preserves insertion order
-> Better for dynamic key/value collections
-> Use when performing frequent insertions/deletions
-> When working with large datasets requiring high performance
**Note**
-> While both are valid, 'Map' is generally preferred for dynamic, complex key-value storage due to it's flexibility, safety and performance

**this**
-> Global scope : window
-> Regular function : window/undefined
-> Method call : object before dot
-> Arrow function : Inherited from parent
-> Constructor(new) : new object

**call()**
-> Invokes a function immediately and lets you set the value of 'this'
-> Takes comma separated values as arguments

**apply()**
-> Almost same as call, but arguments are passed as an array

**bind()**
-> Does not call the function immediately
-> Instead, returns a new function with 'this' permanently bound
-> Once an object is bound using 'bind', 'this' cannot be changed