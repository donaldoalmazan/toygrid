wasm_srcs := $(wildcard public/**/*.go)
wasm_objs := $(subst .go,.wasm,$(wasm_srcs))

all: $(wasm_objs) tiptap run

%.wasm: %.go
	GOOS=js GOARCH=wasm go build -o $@ $<
	# tinygo build -o $@ -target wasm $<
	# tinygo build -o $@ -target wasm -no-debug $<

tiptap:
	cd editor && npm install 
	# set REACT_APP_YJS_WEBSOCKET_SERVER_URL in local/env
	. local/env && cd editor && npm run build

clean:
	rm -f $(wasm_objs)

run:
	cp `go env GOROOT`/misc/wasm/wasm_exec.js public/wasm_exec.js
	# cp `tinygo env TINYGOROOT`/targets/wasm_exec.js public/wasm_exec.js
	cd server && go run . ~/lab/cswg/toygrid/public

