all:

stdgo:
	cp `go env GOROOT`/misc/wasm/wasm_exec.js wasm_exec.js
	cd go; GOOS=js GOARCH=wasm go build -o main.wasm
	go run server/server.go ~/lab/cswg/toygrid

tinygo:
	cp `tinygo env TINYGOROOT`/targets/wasm_exec.js wasm_exec.js
	tinygo build -o ./go/main.wasm -target wasm -no-debug ./go/main.go
	go run server/server.go ~/lab/cswg/toygrid
