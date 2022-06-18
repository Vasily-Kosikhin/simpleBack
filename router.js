import Router from 'express';
import SimpleController from './SimpleController.js';
const router = new Router();

router.get('/handle?', SimpleController.queryAnswer);
router.put('/handle/:message', SimpleController.paramsAnswer);
router.post('/handle/multipart', SimpleController.multipartAnswer);
router.post('/handle/urlencoded', SimpleController.urlencodedAnswer);
router.patch('/handle/patch', SimpleController.patchAnswer);
export default router;
