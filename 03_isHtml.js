const path = "/users/download/index.html"

let isHtml = path => {
  ` Return whether path includes *.html file`
  return path.endsWith('.html')
}
console.log(isHtml(path));

