/*eslint-disable*/

// FAIL - Date.now() usage in another file.
const d = Date.now();

// FAIL - MutationEvent usage in another file.
document.addEventListener('DOMNodeInserted', function(e) {
  console.log('DOMNodeInserted');
});

// FAIL - non-passive listener usage in another file.
document.addEventListener('wheel', e => {
  console.log('whee: arrow function');
});
