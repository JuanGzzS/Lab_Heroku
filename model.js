
let mongoose = require( 'mongoose' );

mongoose.Promise = global.Promise;

let uuid = require("uuid");

let idN = uuid.v4();

let comentCollection = mongoose.Schema({

    titulo : { type : String },
    contenido : { type: String },
    autor : { type: String },
    fecha : {
        type: Date,
    },
    id : {

    	type : String,
    	data : idN
    }
});

let Comentario = mongoose.model('comentarios', comentCollection);

let ComentList = {

	 getAll : function(){
        return Comentario.find()
            .then( comentarios => {
                return comentarios;
            })
            .catch( error => {
                throw Error( error );
            });
      },
      create : function( newComent ){
		return Comentario.create( newComent )
				.then( comentarios => {
					return comentarios;
				})
				.catch( error => {
					throw Error(error);
				});
	},
	update : function (actComent, actualizar){
        return Comentario.updateOne(actComent , actualizar)
            then( comentarios => {
                return comentarios;
            })
            .catch( error => {
                throw Error( error );
            });
    },
    remove : function( removeComent ){
        return Comentario.remove(removeComent)
            then( comentarios => {
                return comentarios;
            })
            .catch( error => {
                throw Error( error );
            });
    }
}

module.exports = {
    ComentList
};
