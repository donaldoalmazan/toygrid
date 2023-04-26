package main

// XXX move apps to ./app/*, rename this file to main.go, fix Makefile

import (
	"log"
	"net/http"
	"os"

	. "github.com/stevegt/goadapt"
)

const port = 9073

func main() {
	dir := os.Args[1]

	// create file server handler
	path := http.Dir(dir)

	fs := http.FileServer(path)

	http.HandleFunc("/echo", echo)
	http.Handle("/", fs)

	Pf("Serving files from %v on port %v\n", path, port)
	log.Fatal(http.ListenAndServe(Spf(":%v", port), nil))
}
