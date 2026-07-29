"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSelector = void 0;
var ThemeSelector = /** @class */ (function () {
    function ThemeSelector() {
    }
    /**
     * Applies a yellow fire effect to the text.
     *
     * @param text - The input text to apply the effect to.
     * @returns The processed text with the green fire effect.
     */
    ThemeSelector.prototype.fire = function (text) {
        var fade = '';
        var green = 250;
        for (var _i = 0, _a = text.split('\n'); _i < _a.length; _i++) {
            var line = _a[_i];
            fade += "\u001B[38;2;255;".concat(green, ";0m").concat(line, "\u001B[0m\n");
            green = Math.max(0, green - 25);
        }
        return fade;
    };
    /**
     * Applies a purple neon effect to the text.
     *
     * @param text - The input text to apply the effect to.
     * @returns The processed text with the purple neon effect.
     */
    ThemeSelector.prototype.purpleNeon = function (text) {
        var fade = '';
        var purple = 255;
        for (var _i = 0, _a = text.split('\n'); _i < _a.length; _i++) {
            var line = _a[_i];
            fade += "\u001B[38;2;255;0;".concat(purple, "m").concat(line, "\u001B[0m\n");
            purple = Math.max(0, purple - 25);
        }
        return fade;
    };
    /**
     * Applies a cyan effect to the text.
     *
     * @param text - The input text to apply the effect to.
     * @returns The processed text with the cyan effect.
     */
    ThemeSelector.prototype.cyan = function (text) {
        var fade = '';
        var blue = 100;
        for (var _i = 0, _a = text.split('\n'); _i < _a.length; _i++) {
            var line = _a[_i];
            fade += "\u001B[38;2;0;255;".concat(blue, "m").concat(line, "\u001B[0m\n");
            if (blue < 255) {
                blue = Math.min(255, blue + 15);
            }
        }
        return fade;
    };
    /**
     * Applies a water effect to the text.
     *
     * @param text - The input text to apply the effect to.
     * @returns The processed text with the water effect.
     */
    ThemeSelector.prototype.water = function (text) {
        var fade = '';
        var green = 255;
        for (var _i = 0, _a = text.split('\n'); _i < _a.length; _i++) {
            var line = _a[_i];
            fade += "\u001B[38;2;0;".concat(green, ";255m").concat(line, "\u001B[0m\n");
            if (green > 30) {
                green = Math.max(30, green - 40);
            }
        }
        return fade;
    };
    return ThemeSelector;
}());
exports.ThemeSelector = ThemeSelector;
