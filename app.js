var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var grade = require("./models/gradeSchema");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gradeRouter = require('./routes/grades');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradeRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Atlas MongoDB link
  require('dotenv').config();
  const connectionString =
  process.env.MONGO_CON
  mongoose = require('mongoose');
  mongoose.connect(connectionString,
  {useNewUrlParser: true,
  useUnifiedTopology: true});

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


async function recreateDB(){
// Delete everything
await grade.deleteMany();
let instance1 = new
grade({grade:"ghost", size:'large',
cost:15.4});
let instance2 = new
grade({grade:"ghosty", size:'small',
cost:13.8});
let instance3 = new
grade({grade:"ghostyy", size:'medium',
cost:20.1});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });

  instance3.save().then(doc=>{
    console.log("third object saved")}
    ).catch(err=>{
    console.error(err)
    });

}

let reseed = true;
if (reseed) {recreateDB();}
/*
async function recreateDB(){
  // Delete everything
  await grade.deleteMany();
  let instance2 = new
  grade({grade:"ghosty", size:'small',
  cost:13.8});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseedd = true;
  if (reseedd) {recreateDB();}



  async function recreatteDB(){
    // Delete everything
    await grade.deleteMany();
    let instance3 = new
    grade({grade:"ghostyy", size:'medium',
    cost:20.1});
    instance3.save().then(doc=>{
    console.log("third object saved")}
    ).catch(err=>{
    console.error(err)
    });
    }
    let reseeddd = true;
    if (reseeddd) {recreatteDB();}
*/
module.exports = app;
