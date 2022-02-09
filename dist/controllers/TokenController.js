"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body; // defaut value

    if(!email || !password){
      return res.status(401).json({
        erros: ['Credenciais invalidas!']
      })
    }

    const user = await _User2.default.findOne({where: { email }}) // find the user on data
    
    if(!user){
      return res.status(404).json({
        erros: ['Usuário não existe na base de dados!']
      })
    }
    if(! (await user.passwordIsValid(password))){ //verify the user's password 
      return res.status(404).json({
        erros: ['Senha invalida!']
      })
    }
    const { id } = user
    const token = _jsonwebtoken2.default.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    })

    res.json({token: token});
  }
}

exports. default = new TokenController();
