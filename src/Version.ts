// @ts-expect-error avoid enabling resolveJsonModule to keep build process simple
import pkg from "../package.json";

/**
 * @public
 */
export const Version: string = pkg.version;
