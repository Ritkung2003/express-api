import express from "express";
import { UserSignUp } from "../controllers/UserController.js";

const UserRoute = express.Router();

// User Signup - POST with req.body
UserRoute.post('/signup', UserSignUp);



export default UserRoute;