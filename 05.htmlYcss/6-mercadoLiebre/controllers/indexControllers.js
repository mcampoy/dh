const indexControllers = {
    home: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    
      

}


module.exports = indexControllers;