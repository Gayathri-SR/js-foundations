**Hoisting**
-> All variable and function definitions are moved to the top of their scope during compilation, before code execution.

var - hoisted and initialized as undefined
let, const = hoisted but not initialized

**Temporal Dead Zone**
Area between hoisting and initialization

When accessing let & const in TDZ, gives reference error as these are not initialized.