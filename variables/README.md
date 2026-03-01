Variable - A named container for a value

var, let , const : Ways to declare variables in js

**Scope:**
var - Function scoped , doesn't respect block scope
let, const - Block scoped

**Reassignment**
var, let - Can be reassigned
const - Cannot be reassigned. But if it holds an object, the object can be mutated.

**Redeclaration**
var - can be redeclared (Dangerous in large apps)
let, const - Cannot be redeclared in the same scope (Safer)

**Usage recommendation**
By default - const
When value must change - let
To completely avoid - var (as it may cause unpredictable bugs due to hoisting & memory leakage)

**Shadowing**
Inner variable hides/shadows outer variable since JS always checks current scope first