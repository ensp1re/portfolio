import rateLimit from 'express-rate-limit';


export const limiter = (windowMinutes: number, maxRequests: number) => {
    return rateLimit({
        windowMs: windowMinutes * 60 * 1000,
        max: maxRequests,
        keyGenerator: (req) => req.ip,
    });
};
