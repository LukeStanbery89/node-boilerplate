import { Express } from "express";
import rateLimit from "express-rate-limit";

// Define the rate limit options
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});

export default function initRateLimiter(app: Express) {
    app.use(limiter);
}
