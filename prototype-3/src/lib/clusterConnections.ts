// import the connection by getInstance
import { Connect_cache } from './redis';

// state main redis url in a string
const mainCache: string = "redis://localhost:5000";
// state 4 redis urls in a array
const clusterCaches: string[] = [
  "redis://localhost:5300", // ->23kb
  "redis://localhost:5400", // 34 kb
  "redis://localhost:5500", // 52 kb
  "redis://localhost:5600", // 16 kb
];

// call all the clusters
export const cacheClusters = () => {
  const main: unknown[] = [];
  console.log("cluster caches connected");
  clusterCaches.forEach((items: string, index: number) => {
    const temp = Connect_cache(items);
    main.push(temp);
    console.log("cluster count->", index, items);
  });
  return main;
};
// call the main cluster
export const main_Cluster = () => {
  console.log("main cache connected");
  return Connect_cache(mainCache);
};
