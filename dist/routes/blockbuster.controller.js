"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BDcontroller_1 = require("../controller/BDcontroller");
const router = (0, express_1.Router)();
router.get("/home", BDcontroller_1.getAllMovies);
router.get("/", BDcontroller_1.fullDbMovies);
router.post('/', BDcontroller_1.addMovie);
// router.post();
exports.default = router;