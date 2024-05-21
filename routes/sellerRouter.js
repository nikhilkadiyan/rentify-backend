import express from "express";
import {
  addProperty,
  deleteProperty,
  getPropertyList,
} from "../controllers/sellerController.js";
import authMiddleware from "../middleware/auth.js";
const sellerRouter = express.Router();

sellerRouter.post("/addproperty", authMiddleware, addProperty);
sellerRouter.get("/propertylist", authMiddleware, getPropertyList);
sellerRouter.delete("/:id", deleteProperty);
export default sellerRouter;
