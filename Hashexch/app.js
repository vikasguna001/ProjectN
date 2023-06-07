var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UsersRoutes');
var MasterRoutes = require('./routes/MasterRoutes');
var MatchedLiveRoutes = require('./routes/MatchedLiveRoutes');
var ChipsTransactionRoutes = require('./routes/ChipsTransactionRoutes');
var PaymentDepositReqDetailRoutes = require('./routes/PaymentDepositReqDetailRoutes');
var PaymentDepositPaidDetailRoutes = require('./routes/PaymentDepositPaidDetailRoutes');
var PaymentWithdrwalReqDetailRoutes = require('./routes/PaymentWithdrwalReqDetailRoutes');
var PaymentWithdrwalPaidDetailRoutes = require('./routes/PaymentWithdrwalPaidDetailRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', MasterRoutes);
app.use('/api', MatchedLiveRoutes);
app.use('/api', ChipsTransactionRoutes);
app.use('/api', PaymentDepositReqDetailRoutes);
app.use('/api', PaymentDepositPaidDetailRoutes);
app.use('/api', PaymentWithdrwalReqDetailRoutes);
app.use('/api', PaymentWithdrwalPaidDetailRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

var whitelist = ['*'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
