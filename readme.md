Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : Here is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById : It selects an element by its ID and returns a single element. If there is no element, it will return null.
getElementsByClassName: It can select multiple elements by their class name and returns element inside live HTMLCollection 
querySelector: It selects the first element matching the CSS selector and returns a single value. If it does not find any element by matching the CSS selector, it returns null.
querySelectorAll:Returns all elements matching a CSS selector into a static NodeList.

Q2: How do you create and insert a new element into the DOM?

Answer: Firstly , Create an empty element by "document.createElement('div')"
Secondly , add some  content as like text ('newDiv'), HTML,classes,attributes . Then add some style as like css
Lastly, we need to pick a element and then insert it by using "element.appendChild(newDiv)"

Q3: What is Event Bubbling and how does it work?
 
 Answer: Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
 How does it work :
 When the button is clicked, the event first starts at the target element (the button). In the capturing phase, the event travels from the top of the DOM down to the button, but since no listeners are set with capture, nothing happens there. Once it reaches the button, the child’s click listener runs. After that, the event enters the bubbling phase, moving back up through the DOM. This allows the parent’s listener to run next. By default, event listeners work in the bubbling phase unless explicitly told to capture, which is why the child logs first and then the parent.

 Q4: What is Event Delegation in JavaScript? Why is it useful?

 Answer: Event delegation in JavaScript is a smart way of handling events. Instead of putting a separate event listener on every single child element, you just put one listener on their parent.

 Useful: Event delegation is useful because it makes your code lighter and faster — we don’t have to add an event listener to every single child element. It also works great when new elements are added later, since the parent can still catch their events without extra setup. Plus, it keeps your code neat and easy to manage, since all the event handling lives in one place.

 Q5:What is the difference between preventDefault() and stopPropagation() methods?

 Answer:  preventDefault():It is used when you want to stop the browser’s usual behavior for an element. For example, clicking on a link normally takes you to another page, and submitting a form usually reloads the page — preventDefault() stops these default actions, but the event itself still continues to bubble up through the DOM.
  
   stopPropagation(): It is used to stop the event from moving up or down the DOM tree. So if you click a button inside a div, the event won’t reach the div or any of its ancestors. It’s important to note that stopPropagation() doesn’t stop the element’s normal behavior — it only controls the flow of the event.