// The router defines the routes for the messages API.
// The router is mounted on the /api/messages path in the index.ts file.
// The router defines the following routes:
// GET /api/messages/public
// GET /api/messages/protected
// GET /api/messages/admin


import express from "express";
import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../middleware/auth0.middleware";
import { AdminMessagesPermissions } from "./messages.permissions";
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from "./messages.service";

export const messagesRouter = express.Router();

// The public endpoint is accessible to all users and does not require an access token.
messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});


// The following two endpoints are protected endpoints, you know this because 
// they use the validateAccessToken middleware.

// The protected endpoint is accessible to all users and requires an access token.
messagesRouter.get("/protected", validateAccessToken, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

// The admin endpoint is accessible only to users with the AdminMessagesPermissions.Read permission.
messagesRouter.get(
  "/admin",
  validateAccessToken,
  checkRequiredPermissions([AdminMessagesPermissions.Read]),
  (req, res) => {
    const message = getAdminMessage();

    res.status(200).json(message);
  }
);
