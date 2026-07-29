"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var signale_1 = require("signale");
var Signale = signale_1.default.Signale;
var options = {
    disabled: false,
    interactive: false,
    logLevel: 'info',
    scope: 'Namoo Music',
    types: {
        info: {
            badge: 'ℹ',
            color: 'blue',
            label: 'info',
        },
        warn: {
            badge: '⚠',
            color: 'yellow',
            label: 'warn',
        },
        error: {
            badge: '✖',
            color: 'red',
            label: 'error',
        },
        debug: {
            badge: '🐛',
            color: 'magenta',
            label: 'debug',
        },
        success: {
            badge: '✔',
            color: 'green',
            label: 'success',
        },
        log: {
            badge: '📝',
            color: 'white',
            label: 'log',
        },
        pause: {
            badge: '⏸',
            color: 'yellow',
            label: 'pause',
        },
        start: {
            badge: '▶',
            color: 'green',
            label: 'start',
        },
    },
};
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super.call(this, options) || this;
    }
    return Logger;
}(Signale));
exports.default = Logger;
