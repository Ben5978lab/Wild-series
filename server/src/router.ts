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

import programAction from "./modules/program/programAction";
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

router.get("/api/programs", programAction.browse);

export default router;
