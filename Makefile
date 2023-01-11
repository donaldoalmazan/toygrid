all:
	cp `go env GOROOT`/misc/wasm/wasm_exec.js wasm_exec.js
	cd go; GOOS=js GOARCH=wasm go build -o main.wasm
	go run server/server.go ~/lab/cswg/toygrid
