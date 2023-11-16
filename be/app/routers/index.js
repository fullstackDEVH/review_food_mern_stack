import express from "express";

import userRouter from "./user.router.js";
import postRouter from "./post.router.js";

const router = express.Router();

router.use("/api/users", userRouter);
router.use("/api/posts", postRouter);

export default router;
