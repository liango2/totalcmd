// plugins.htm
// chrome devtools
var tds = document.querySelectorAll('td:first-child')
var arr = []
arr.forEach.call(tds, function(item) {
	arr.push(item.textContent.replace(/\s*/g, ''))
})
copy(arr.join('\n'))
// editor compare