wasm_srcs := $(wildcard public/**/*.go)
wasm_objs := $(subst .go,.wasm,$(wasm_srcs))

tiptap_srcs := $(wildcard editor/build/static/js/*) 

all: $(wasm_objs) tiptap run

%.wasm: %.go
	GOOS=js GOARCH=wasm go build -o $@ $<
	# tinygo build -o $@ -target wasm $<
	# tinygo build -o $@ -target wasm -no-debug $<
	cp `go env GOROOT`/misc/wasm/wasm_exec.js public/wasm_exec.js
	# cp `tinygo env TINYGOROOT`/targets/wasm_exec.js public/wasm_exec.js

tiptap: tiptap-build

tiptap-build: public/editor/main.js public/style.css

public/editor/main.js public/style.css: $(tiptap_srcs)
	# set REACT_APP_YJS_WEBSOCKET_SERVER_URL in local/env
	cd editor && npm install 
	. local/env && cd editor && npm run build
	cp editor/build/static/js/main.*.js public/editor/main.js
	cp editor/build/static/css/main.*.css public/style.css

clean:
	rm -f $(wasm_objs)

run:
	cd server && go run . ~/lab/cswg/toygrid/public

