declare enum OS {
    WIN32 = "win32",
    WIN64 = "win64",
    MAC64 = "mac64",
    MAC_ARM64 = "mac64",
    LINUX64 = "linux64",
    UNSUPPORTED = "unsupported"
}
declare const getOS: () => OS;
declare const isWin: () => boolean;
declare const isSupportedPlatform: () => boolean;
export { getOS, isSupportedPlatform, isWin };
