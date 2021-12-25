1. [CODE STYLE] - Don't nest ternary operators. Write one, you can do this, we believe in you !
2. [CODE STYLE] - You don't need to name functions if you return them right away.

BAD EXAMPLE:
```
function a() {
 return function b() {
   console.log('Hello');
 }
}
```

GOOD EXAMPLE:
```
function a() {
 return function() {
   console.log('Hello') ;
 }
}
```


4. [CODE STYLE] - You should use one variable for counting function calls
5. [CODE STYLE] - DRY. When you do similar logic, try to combine conditions
