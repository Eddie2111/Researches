package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"sync"
)

type RedisStatus struct {
    Port  int
    Count int
}

var (
    redisStatuses = map[int]int{
        5300: 0,
        5400: 0,
        5500: 0,
        5600: 0,
    }
    mu sync.Mutex
)

func main() {
    http.HandleFunc("/", getLeastUsedRedisPort)
    log.Fatal(http.ListenAndServe(":8000", nil))
}

func getLeastUsedRedisPort(w http.ResponseWriter, r *http.Request) {
    mu.Lock()
    defer mu.Unlock()

    var leastUsedPort int
    leastUsedCount := -1
    for port, count := range redisStatuses {
        if leastUsedCount == -1 || count < leastUsedCount {
            leastUsedPort = port
            leastUsedCount = count
        }
    }

    redisStatuses[leastUsedPort]++

    response := struct {
        Port string `json:"port"`
    }{
        Port: strconv.Itoa(leastUsedPort),
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}
