module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },

        // created_at: {
        //     type: dataTypes.timestamp,
        //     allowNull: true
        // },

        // updated_at: {
        //     type: dataTypes.timestamp,
        //     allowNull: true,
        // },

        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        rating: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        awards: {
            type: dataTypes.INTEGER,
            allowNull: false,
            default: 0
        },

        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },

        length: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },

        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
        }

    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie;
}