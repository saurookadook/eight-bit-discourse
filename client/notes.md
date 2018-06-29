From running 'npm run build':

Creating an optimized production build...
Compiled with warnings.

./src/containers/PostPage.js
  Line 20:  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes
  Line 40:  Missing radix parameter                                                 radix

./src/components/Post.js
  Line 2:   'Link' is defined but never used                no-unused-vars
  Line 5:   'bindActionCreators' is defined but never used  no-unused-vars
  Line 21:  Missing radix parameter                         radix

./src/containers/CommentForm.js
  Line 37:  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes

./src/components/CommentsList.js
  Line 7:  'comments' was used before it was defined  no-use-before-define

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  56.87 KB (+19.93 KB)  build/static/js/main.bb636db2.js
  322 B (+23 B)         build/static/css/main.c3a654a0.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr
