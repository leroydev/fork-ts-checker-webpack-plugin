"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function isInsideAnotherPath(parent, directory) {
    const relativePart = path_1.relative(parent, directory);
    // Tested folder is above parent.
    if (relativePart.startsWith('..')) {
        return false;
    }
    // Tested folder is the same as parent.
    if (relativePart.length === 0) {
        return false;
    }
    // Tested directory has nothing in common with parent.
    if (path_1.isAbsolute(relativePart)) {
        return false;
    }
    // Last option, must be subfolder.
    return true;
}
exports.isInsideAnotherPath = isInsideAnotherPath;
