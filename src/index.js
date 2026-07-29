"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var shard_1 = require("./shard");
var Logger_1 = require("./structures/Logger");
var ThemeSelector_1 = require("./utils/ThemeSelector");
var logger = new Logger_1.default();
var theme = new ThemeSelector_1.ThemeSelector();
/**
 * Sets the console window title.
 * @param title - The new title for the console window.
 */
function setConsoleTitle(title) {
    // Write the escape sequence to change the console title
    process.stdout.write("\u001B]0;".concat(title, "\u0007"));
}
try {
    if (!fs.existsSync('./src/utils/Logo.txt')) {
        logger.error('Logo.txt file is missing');
        process.exit(1);
    }
    console.clear();
    // Set a custom title for the console window
    setConsoleTitle('PEACH MUSIC');
    var logFile = fs.readFileSync('./src/utils/Logo.txt', 'utf-8');
    console.log(theme.purpleNeon(logFile));
    (0, shard_1.shardStart)(logger);
}
catch (err) {
    logger.error('[CLIENT] An error has occurred:', err);
}
