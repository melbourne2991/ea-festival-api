"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "requireEnvVar", {
    enumerable: true,
    get: function() {
        return requireEnvVar;
    }
});
var requireEnvVar = function(key) {
    var value = process.env[key];
    if (!value) throw new Error("Missing env var: ".concat(key));
    return value;
};
