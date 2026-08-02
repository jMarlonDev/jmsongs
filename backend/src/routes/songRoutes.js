import express, { Router } from "express";

import { createSongController, getAllSongsController, getSongByIdController, updateSongController, deleteSongController } from "../controllers/songControllers.js";

const router = Router();

router.post("/", createSongController);
router.get("/", getAllSongsController);
router.get("/:id", getSongByIdController);
router.put("/:id", updateSongController);
router.delete(":id", deleteSongController);

export default router;
