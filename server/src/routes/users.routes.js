const express = require("express");
const { setUserRole } = require("../controllers/users.controller");

const router = express.Router();

router.patch("/set-role", setUserRole);

module.exports = router;
