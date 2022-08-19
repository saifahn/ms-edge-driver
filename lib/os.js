"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWin = exports.isSupportedPlatform = exports.getOS = void 0;
var OS;
(function (OS) {
    OS["WIN32"] = "win32";
    OS["WIN64"] = "win64";
    OS["MAC64"] = "mac64";
    OS["MAC_ARM64"] = "mac64";
    OS["LINUX64"] = "linux64";
    OS["UNSUPPORTED"] = "unsupported";
})(OS || (OS = {}));
var getOS = function () {
    var platform = process.platform;
    var arch = process.arch;
    if (platform === 'win32') {
        return arch === 'x64' ? OS.WIN64 : OS.WIN32;
    }
    if (platform === 'darwin') {
        if (arch === 'x64')
            return OS.MAC64;
        if (arch === 'arm64')
            return OS.MAC_ARM64;
    }
    if (platform === 'linux' && arch === 'x64')
        return OS.LINUX64;
    return OS.UNSUPPORTED;
};
exports.getOS = getOS;
var isWin = function () {
    return [OS.WIN32, OS.WIN64].includes(getOS());
};
exports.isWin = isWin;
var isSupportedPlatform = function () {
    return [OS.WIN32, OS.WIN64, OS.MAC64, OS.MAC_ARM64, OS.LINUX64].includes(getOS());
};
exports.isSupportedPlatform = isSupportedPlatform;
