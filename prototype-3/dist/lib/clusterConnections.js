"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_Cluster = exports.cacheClusters = void 0;
// import the connection by getInstance
const redis_1 = require("./redis");
// state main redis url in a string
const mainCache = "redis://localhost:5000";
// state 4 redis urls in a array
const clusterCaches = [
    "redis://localhost:5300", // ->23kb
    "redis://localhost:5400", // 34 kb
    "redis://localhost:5500", // 52 kb
    "redis://localhost:5600", // 16 kb
];
// call all the clusters
const cacheClusters = () => {
    const main = [];
    console.log("cluster caches connected");
    clusterCaches.forEach((items, index) => {
        const temp = (0, redis_1.Connect_cache)(items);
        main.push(temp);
        console.log("cluster count->", index, items);
    });
    return main;
};
exports.cacheClusters = cacheClusters;
// call the main cluster
const main_Cluster = () => {
    console.log("main cache connected");
    return (0, redis_1.Connect_cache)(mainCache);
};
exports.main_Cluster = main_Cluster;
//# sourceMappingURL=clusterConnections.js.map