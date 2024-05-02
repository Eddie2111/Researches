"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainToClusterRemove = exports.mainToClusterRetrieval = exports.mainToClusterInsert = exports.cluster_insert = exports.main_cluster_insert = exports.main_Cluster = exports.cacheClusters = void 0;
// import the connection by getInstance
const redis_1 = require("./redis");
// state main redis url in a string
const mainCache = "redis://localhost:5001";
// state 4 redis urls in a array
const clusterCaches = [
    // approximate first storage initiation
    "redis://localhost:5300", // 23 kb
    "redis://localhost:5400", // 34 kb
    "redis://localhost:5500", // 52 kb
    "redis://localhost:5600", // 16 kb
];
// call all the clusters
let main = [];
let main_conn;
// call the cluster instances
const cacheClusters = () => {
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
    if (!main_conn) {
        main_conn = (0, redis_1.Connect_cache)(mainCache);
        return main_conn;
    }
    else {
        return main_conn;
    }
};
exports.main_Cluster = main_Cluster;
// select and insert the data based on the port number provided
const main_cluster_insert = (key, location) => {
    try {
        // Corrected: key is the first argument, location is the second argument
        main_conn.setex(key, 60 * 60 * 4, location);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.main_cluster_insert = main_cluster_insert;
// select and insert the data based on the port number provided
const cluster_insert = (port, data) => {
    try {
        let portToAdd;
        clusterCaches.forEach((items, index) => {
            if (items.includes(port)) {
                portToAdd = main[index];
            }
        });
        // Corrected: key is the first argument, value is the second argument
        portToAdd.setex(data.username, 60 * 60 * 4, JSON.stringify(data));
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.cluster_insert = cluster_insert;
const mainToClusterInsert = async (parsed) => {
    try {
        const response1 = await (0, exports.main_cluster_insert)(parsed.username, JSON.stringify(parsed));
        console.log("stored at main cache, payload:", parsed);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.mainToClusterInsert = mainToClusterInsert;
const mainToClusterRetrieval = async (key) => {
    try {
        const data = await main_conn.get(key);
        if (data) {
            console.log("payload retrieved");
        }
        return JSON.parse(data);
    }
    catch (err) {
        // this is in case no data is found or transaction error
        // transaction means chain execution
        return {};
    }
};
exports.mainToClusterRetrieval = mainToClusterRetrieval;
const mainToClusterRemove = async (key) => {
    let portToGet;
    try {
        const response_1 = await main_conn.delete(key);
        console.log(location, response_1);
        return true;
    }
    catch (err) {
        // handling operational errors
        console.log(err);
        return false;
    }
};
exports.mainToClusterRemove = mainToClusterRemove;
/*
/**
 * an interface a way to define a data type
 * an interface supports type overloading and type combination
 * this gives significant advantage over using only "type" to
 * define a variable.
 *
 * use strict over the file is used to handle strict variable
 * declaration and reducing variable over usage and re-assignment.
 * Plus, alerts for unused variables and functions.
 */
//# sourceMappingURL=clusterConnections.js.map