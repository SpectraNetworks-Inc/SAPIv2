function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}
  



process.on('uncaughtException', err => {
  console.error(`Yeet ${err}`);
})






