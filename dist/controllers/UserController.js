"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    console.log(req.body);
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ new_user: { id, nome, email } });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async index(req, res) {
    try {
      const user = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json({ user });
    } catch (e) {
      res.status(400).json({
        errors: null,
      });
    }
  }
  async show(req, res) {
    console.log(req.userId, req.userEmail);
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(404).json({
        errors: 'User not to fond!',
      });
    }
  }
  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          error: 'Você precisa está logado para essa ação.',
        });
      }
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          error: 'User do not exist in our database.',
        });
      }
      const novoUser = await user.update(req.body);
      const { id, nome, email } = novoUser;
      res.json({
        msg: 'Usuário atualizado com sucesso!',
        update: {id, nome, email },
      });
    } catch (e) {
      res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async delete(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          error: 'You must to send one id valid',
        });
      }
      const user = await _User2.default.findByPk(req.userId);
      const { name } = user;
      if (!user) {
        return res.status(400).json({
          error: 'User do not exist in our database.',
        });
      }
      await user.destroy();

      res.status(200).json({ resultado: 'Usuário deletado com sucesso!' });
    } catch (e) {
      res.status(404).json({
        errors: 'User do not exist in our database',
      });
    }
  }
}

exports. default = new UserController();
