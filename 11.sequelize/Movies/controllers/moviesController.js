let db =  require('../database/models')
// const Movie = require('../database/models/Movie')

let moviesController = {
    index: (req, res) => {
        db.Movies.findAll()
        .then(function(movies){
            
            res.render('movies', {movies})
        });
    },

    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
        .then((movie)=> {
            res.render('movieDetail', {movie})
        })
    },

    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ['release_date', "DESC"]
            ],
            limit: 5,
        })
        .then((movies) => {
            res.render('latest', {movies})
        })
    },

    recommended: (req, res) => {
        db.Movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]: 8}
            }
        })
        .then((movies) => {
            res.render('recommended', {movies})
        })
    }
}

module.exports = moviesController;