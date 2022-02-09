"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
require('./database/index');
 
class App{
    constructor(){
        this.app = _express2.default.call(void 0, )
        this.middlewares()
        this.routes()
    }

    middlewares(){
<<<<<<< HEAD
        this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname,'..', 'uploads', 'images')));
=======
        this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads', 'images')));
>>>>>>> 183fe43c2fd8b7359c612e84dcd593fd5286814e
        this.app.use(_express2.default.urlencoded({extended:false}))
        this.app.use(_express2.default.json())
        this.app.use(_cors2.default.call(void 0, ))
    }
    routes(){
        this.app.use('/users/', _userRoutes2.default)
        this.app.use('/tokens/', _tokenRoutes2.default)
        this.app.use('/alunos/', _alunoRoutes2.default);
        this.app.use('/alunos/imprime', _alunoRoutes2.default);
        this.app.use('/fotos/', _fotoRoutes2.default);
    }
}

exports. default = new App().app;
