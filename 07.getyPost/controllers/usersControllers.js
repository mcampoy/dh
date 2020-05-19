const controller = {
    register: function(req, res, next) {
        res.render('register');

        res.redirect('profile')
      },

      login: function(req, res, next) {
        res.render('login');
      },

      profile: function(req, res, next) {
        res.render('profile');
      },
};

module.exports = controller;
