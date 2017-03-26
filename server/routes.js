let
  express 		= require('express'),
  router 			= express.Router(),
  controller 	= require('./api.controller');


router.get('*', controller.get);

router.post('/user/login', controller.login);

router.post('*', controller.post);


router.patch('*', controller.patch);


router.delete('*', controller.delete);


module.exports = router;