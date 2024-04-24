"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllUserController_1 = require("../controllers/getAllUserController");
const router = express_1.default.Router();
router
    .route("/")
    .get(async (req, res) => {
    try {
        const response = await (0, getAllUserController_1.getAllUsers)();
        res.json({
            data: response,
            status: response ? 200 : 400,
        });
    }
    catch (err) {
        res.json({
            data: [],
            status: 400,
        });
    }
})
    .post((req, res) => {
    console.log(req.body);
    res.send("test ok");
});
exports.default = router;
//# sourceMappingURL=getusers.js.map