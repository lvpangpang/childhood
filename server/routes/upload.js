const fs = require('fs');
const express = require('express');
const multer = require('multer');

const router = express.Router();

function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

router.use('/upload', multer({dest: './upload/temp'}).single('file'),
(req, res, next) => {
  const domain = req['headers']['host'];
  const file = req.file;
  const fileName = file.mimetype.slice(file.mimetype.indexOf('/') + 1);
  const uuid = guid();
  fs.renameSync(`./upload/temp/${file.filename}`, `./upload/file/${uuid + '.' + fileName}`);
  res.json({
    code: 0,
    data: {
      url: 'http://' + domain + `/file/${uuid + '.' + fileName}`
    }
  });
});

module.exports = router;

