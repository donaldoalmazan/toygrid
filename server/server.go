package main

import (
	"log"
	"net/http"
	"os"

	. "github.com/stevegt/goadapt"
)

func main() {
	dir := os.Args[1]

	// create file server handler
	d := http.Dir(dir)
	Pf("Serving files from %v\n", d)

	fs := http.FileServer(http.Dir(dir))

	// start HTTP server with `fs` as the default handler
	log.Fatal(http.ListenAndServe(":9273", fs))

}
