var _send = (typeof workerPostMessage !== 'undefined')?workerPostMessage:postMessage;
var _myeval = eval;
var _flag = 0;
_onmessage = function(event) {
    var _ans, _foo, _x = JSON.parse(event.data);
    if(typeof _x.imports !== "undefined") {
        for(_foo=0;_foo<_x.imports.length;_foo++) { importScripts(_x.imports[_foo]); }
        return;
    }
    try {
        _ans = _myeval(_x.e);
        current = -1;
        if(typeof(_ans) !== "undefined") { _foo = numeric.prettyPrint(_ans,true); }
        else { _foo = ""; }
    } catch(e) {
        _ans = undefined;
        _foo = e.name+': '+e.message;
        if(typeof e.stack !== "undefined" && typeof e.stack.toString !== "undefined")
        { _foo += "\n\n"+e.stack.toString(); }
        _foo = _foo.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
    }
    _send(JSON.stringify({k:_x.k,n:_x.n,o:_foo}));
}
if(typeof _retarded === "undefined") { onmessage = _onmessage; }