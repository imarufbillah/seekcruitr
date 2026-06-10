const express = require("express");
const {
  postCompany,
  getAllCompanies,
} = require("../controllers/companies.controller");

const router = express.Router();

router.get("/", getAllCompanies);
router.post("/", postCompany);

module.exports = router;
