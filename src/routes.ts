import express from "express";
import UserController from "./controller/UserController";

const router = express.Router();

// criando um usuario
router.post("/users", UserController.create);

// lendo todos os usuarios
router.get("/users", UserController.findAll);

// lendo um usuario
router.get("/users/:userId", UserController.findOne);

// alterando um usuario
router.put("/users/:userId", UserController.update);

// deletando um usuario
router.delete("/users/:userId", UserController.destroy);

export { router };
