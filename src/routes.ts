import express from "express";
import UserController from "./controller/UserController";

const router = express.Router();

// criando um usuario
router.post("/users", UserController.create);

// lendo todos os usuarios
router.get("users", UserController.findAll);

// lendo um usuario
router.get("users/:userID", UserController.findOne);

// alterando um usuario
router.put("users/:userID", UserController.update);

// deletando um usuario
router.delete("user/:userID", UserController.destroy);

export { router };
