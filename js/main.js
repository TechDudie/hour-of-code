var text = `Hour Of Code

Hour Of Code is on December 12, 2021!

https:/studio.code.org/courses`
text = Object.assign([], text);
var i = 0
function print() {
  if (text[i] != undefined) { document.getElementById("terminal").value += text[i]; i += 1; };
}
var textInterval = setInterval(print, 1);
document.addEventListener("keydown",  e => { e.preventDefault(); });
