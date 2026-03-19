**Inheritance**
-> One object can use properties and methods of another object
-> In JS, this happens via the prototype chain (not classical classes like Java/C++)
**Common mistake**
b.prototype=a.prototype
-> Both now share the same object
-> Changes in one affect the other
**Key concepts**
-> Two types of inheritance:
    Properties : Parent.call(this); //Constructor call
    Methods    : Object.create(Parent.prototype) //Prototype chaining
-> Methods are not copied. They are shared via prototype
-> Lookup still uses prototype chain

**Note**
-> JS supports OOP, but it's prototype based rather than class-based. 
-> ES6 classes are syntactic sugar over prototypes
-> Java/C++ : Classes create objects
   JS       : Objects inherit from objects (via prototype)