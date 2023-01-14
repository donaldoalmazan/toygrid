package main

import (
	"context"
	"fmt"
	"time"

	. "github.com/stevegt/goadapt"
	"nhooyr.io/websocket"
	"nhooyr.io/websocket/wsjson"
)

const (
	url = "ws://localhost:9273/echo" // XXX move to config or env
	// url = "ws://echo.websocket.events"
)

func main() {
	fmt.Println("WebSocket client in Go WASM")

	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	c, _, err := websocket.Dial(ctx, url, nil)
	Ck(err)
	defer c.Close(websocket.StatusInternalError, "websocket closed")

	i := 0
	for {
		i += 1
		ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
		defer cancel()

		// Send a message to the server
		sendMsg := Spf("Hello from Go WASM %v", i)
		err = wsjson.Write(ctx, c, sendMsg)
		if err != nil {
			fmt.Println("Failed to send message:", err)
			continue
		}
		// Receive a message from the server
		var recvMsg string
		err = wsjson.Read(ctx, c, &recvMsg)
		if err != nil {
			fmt.Println("Failed to receive message:", err)
			continue
		}
		fmt.Println("Received message:", recvMsg)
		// sleep for 10 seconds
		time.Sleep(time.Second)
	}

	// c.Close(websocket.StatusNormalClosure, "")
}
