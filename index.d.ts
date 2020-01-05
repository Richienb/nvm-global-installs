declare interface Result {
    [version: string]: {
        [package: string]: string
    }
}

/**
 * Get the globally installed packages for any nvm-selectable version.
 * @param version The version to get the globally installed packages for.
 * @example
 * ```
 * const nvmGlobalInstalls = require("nvm-global-installs");
 *
 * nvmGlobalInstalls("v13.5.0");
 * //=> { 'v13.5.0': { npm: '6.13.4', yarn: '1.21.1' } }
 * ```
*/
declare function nvmGlobalInstalls(version?: string | string[]): Result;

export = nvmGlobalInstalls;
