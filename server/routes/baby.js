const express = require('express');
const router = express.Router();
const { handleRes } = require('./common.js');

router.use('/get', async (req, res, next) => {
  const { babyId } = req.query;
  const sql = `select * from baby where babyId='${babyId}'`;
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: data[0]
  });
});

module.exports = router;