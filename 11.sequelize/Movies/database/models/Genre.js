module.exports =  (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genre', 
    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },

        // created_at: {
        //     type: dataTypes.DATE,
        //     allowNull: true
        // },

        // updated_at: {
        //     type: dataTypes.DATE,
        //     allowNull: true
        // },

        name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        // rating: {
        //     type: dataTypes.INTEGER,
        //     allowNull: false
        // },

        // active: {
        //     type: dataTypes.TINYINT,
        //     allowNull: false
        // }
    },
    {
        tableName: 'genres',
        timestamps: false
    });

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, 
        {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;
}