"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Login required'],
    });
  }

  const [Bearer, token] = authorization.split(' ');
  
  try {
    //
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id; // passando o id e o email do user na requisiçao
    req.userEmail = email;
    //
    const user  = _User2.default.findOne({where: {id, email}})
    if(!user){
      return res.status(401).json({
        erros: ['Usuario inválido!'],
      });
    }
    return next();
    //
  } catch (e) {
    //
    return res.status(401).json({
      erros: ['Token ixpirado ou inválido'],
    });
    //
  }
};
