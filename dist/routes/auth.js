"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const varifyToken_1 = require("../libs/varifyToken");
const auth_controller_1 = require("../controllers/auth.controller");
router.post('/signup', auth_controller_1.signup);
router.post('/signin', auth_controller_1.signin);
router.get('/profile', varifyToken_1.TokenValidate, auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map