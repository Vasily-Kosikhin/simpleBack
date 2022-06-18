import Simple from './Simple.js';
import util from 'util';
import multer from 'multer';
const upload = multer();

class SimpleController {
  async queryAnswer(req, res) {
    try {
      const text = util.inspect(req.query);
      res.json(`я бекэнд простой, получаю ${text} - вывожу ${text}`);
    } catch (error) {
      res.status(404).json(error);
    }
  }
  async paramsAnswer(req, res) {
    try {
      console.log(`test`, req.params);
      const text = util.inspect(req.params);
      res.json(`я бекэнд простой, получаю ${text} - вывожу ${text}`);
    } catch (error) {
      res.status(404).json(error);
    }
  }
  async multipartAnswer(req, res) {
    try {
      const text = util.inspect(req.body);
      res.json(`я бекэнд простой, получаю ${text} - вывожу ${text}`);
    } catch (error) {
      res.status(404).json(error);
    }
  }
  async urlencodedAnswer(req, res) {
    try {
      const text = util.inspect(req.body);
      res.json(`я бекэнд простой, получаю ${text} - вывожу ${text}`);
    } catch (error) {
      res.status(404).json(error);
    }
  }
  async patchAnswer(req, res) {
    try {
      const text = util.inspect(req.body);
      res.json(`я бекэнд простой, получаю ${text} - вывожу ${text}`);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}

export default new SimpleController();
