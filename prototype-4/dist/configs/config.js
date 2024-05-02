"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSetting = exports.corsOptions = exports.cookie = void 0;
exports.cookie = {
    secret: "614ddbec-bfd0-4568-a6e5-c8ba1647e6d7",
    saveUninitialized: false,
    resave: false,
    maxAge: 3600,
};
exports.corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: true,
    methods: "GET,POST",
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type"],
    maxAge: 360,
};
exports.sessionSetting = {
    secret: "614ddbec-bfd0-4568-a6e5-c8ba1647e6d7",
    saveUninitialized: false,
    resave: false,
    maxAge: 360,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 360,
        sameSite: "none",
    },
};
//# sourceMappingURL=config.js.map