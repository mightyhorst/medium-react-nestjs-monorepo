"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isError(e) {
    return (e &&
        e.stack &&
        e.message &&
        typeof e.stack === 'string' &&
        typeof e.message === 'string');
}
exports.isError = isError;
