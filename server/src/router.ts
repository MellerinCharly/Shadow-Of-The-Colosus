import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import idoleGame from "./modules/idoleGame/idoleGameActions";

router.get("/api/idole", idoleGame.browse);
router.post("/api/idole", idoleGame.add);
router.put("/api/idole/:id", idoleGame.edit);
router.delete("/api/idole/:id", idoleGame.deleteIdole);

export default router;
