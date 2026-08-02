import express, { Router } from "express";

import { createSongController, getAllSongsController, getSongByIdController, updateSongController, deleteSongController } from "../controllers/songControllers";

const router = Router();

router.post("/songs", createSongController);
router.get("/songs", getAllSongsController);
router.get("songs/:id", getSongByIdController);
router.put("/songs/:id", updateSongController);
router.delete("/songs/:id", deleteSongController);

export default router;
