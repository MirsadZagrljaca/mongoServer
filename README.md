#My First MongoDB Server\

Start project with: <b>npm start</b><br/>
Move project to production mode with: <b>npm run build</b><br/>

<h3>Packages used:</h3>
  <h4>Production mode:</h4>
    express<br/>
    body-parser<br/>
    helmet<br/>
    lodash<br/>
    mongoose<br/>
  <h4>Development mode:</h4>
    nodemon<br/>
    webpack<br/>
    webpack-cli<br/>
    webpack-node-externals<br/>
    babel-core<br/>
    babel-loader<br/>
    babel-preset-env<br/>
    babel-preset-stage-2<br/>
<h4>Note: Every package used is latest version expect for babel-loader which is 7.1.5</h4><br/>
<h3>Files naming explanation:</h3><br/>
.babelrc - Babel config file<br/>
  nodemon.json - Nodemon config file<br/>
  package.json and package-lock.json - Packages config files<br/>
  webpack.config.js - Webpack config file<br/>
  ./src Main folder with every .js file inside:<br/>
    app.js - Used to initialize app using express and call router for navigation<br/>
    config.js - Holds ports numbers<br/>
    index.js - Main file of the application <br/>
    ./src/controllers Holds controllers:<br/>
      courses.controller.js - File that holds API-s(list, create, update, read, delete) for course collection<br/>
      students.controller.js - File that holds API-s(list, create, update, read, delete) for students collection<br/>
    ./src/models Holds models:<br/>
      course.model.js - Model used for courses collection<br/>
      student.model.js - Model used for students collection<br/>
    ./src/router Holds routers:<br/>
      course.router.js - Router made for courses collections<br/>
      student.router.js - Router made for students collections<br/>
      index.js - Default router file that imports all the routers, call them and exports them to index.js<br/>
