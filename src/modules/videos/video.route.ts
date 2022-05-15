import express from "express";
import requireUser from "../../middleware/requireUser";
import {
  findVideosHandler,
  streamVideoHandler,
  updateVideoHandler,
  uploadVideoHandler,
} from "./video.controller";

const router = express.Router();

router.get("/", findVideosHandler);

router.get("/:videoId", streamVideoHandler);

router.post("/", requireUser, uploadVideoHandler);

router.patch("/:videoId", requireUser, updateVideoHandler);

export default router;
