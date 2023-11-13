import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import nocache from "nocache";
import { messagesRouter } from "./messages/messages.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

// Check for required environment variables inside .env file
if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

// Parse environment variables
const PORT = parseInt(process.env.PORT, 10);
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

// Create express app and router
const app = express();
const apiRouter = express.Router();

// Configure express app
app.use(express.json());
app.set("json spaces", 2);

// Configure the express app security
app.use(
  // Helmet helps secure Express apps by setting HTTP headers
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);

// Set the content type for all responses to application/json
app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});
// Disable caching
app.use(nocache());

// Configure the express app CORS
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

// Configure the express app routes 
app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);

app.use(errorHandler);
app.use(notFoundHandler);

// Start the express app on the PORT specified in the .env file
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
