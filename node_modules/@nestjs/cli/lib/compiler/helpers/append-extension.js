"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function appendTsExtension(path) {
    return path_1.extname(path) === '.ts' ? path : path + '.ts';
}
exports.appendTsExtension = appendTsExtension;
