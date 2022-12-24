# Proxy

The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a Proxy with two parameters:

target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
For example, this code creates a proxy for the target object.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Because the handler is empty, this proxy behaves just like the original target:

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
Copy to Clipboard
To customize the proxy, we define functions on the handler object:

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```
