<h1>My First MongoDB Server</h1><br/>

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
<b>.babelrc</b> - Babel config file<br/>
<b>nodemon.json</b> - Nodemon config file<br/>
</b>package.json</b> and <b>package-lock.json</b> - Packages config files<br/>
<b>webpack.config.js</b> - Webpack config file<br/><br/>
<b>./src</b> Main folder with every .js file inside:<br/>
<b>app.js</b> - Used to initialize app using express and call router for navigation<br/>
<b>config.js</b> - Holds ports numbers<br/>
<b>index.js</b> - Main file of the application <br/><br/>
<b>./src/controllers</b> Holds controllers:<br/>
<b>courses.controller.js</b> - File that holds API-s(list, create, update, read, delete) for course collection<br/>
<b>students.controller.js</b> - File that holds API-s(list, create, update, read, delete) for students collection<br/><br/>
<b>./src/models</b> Holds models:<br/>
<b>course.model.js</b> - Model used for courses collection<br/>
<b>student.model.js</b> - Model used for students collection<br/><br/>
<b>./src/router</b> Holds routers:<br/>
<b>course.router.js</b> - Router made for courses collections<br/>
<b>student.router.js</b> - Router made for students collections<br/>
<b>index.js</b> - Default router file that imports all the routers, call them and exports them to index.js<br/>
<h3>Enjoy!</h3>
