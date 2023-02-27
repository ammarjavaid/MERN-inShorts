import express from "express";
import { getNews } from "../controller/newsControl.js";

const router = express.Router();

router.get('/news', getNews);

export default router;