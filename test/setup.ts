import { Log } from "../src";
import "@testing-library/jest-dom";
import { TextEncoder } from "util";
import "@inrupt/jest-jsdom-polyfills";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { jest } from "@jest/globals";

beforeAll(() => {
    global.jest = jest;

    globalThis.fetch = jest.fn() as any;

    const unload = () =>
        setTimeout(() => window.dispatchEvent(new Event("unload")), 200);

    const location = Object.defineProperties(
        {},
        {
            ...Object.getOwnPropertyDescriptors(window.location),
            assign: {
                enumerable: true,
                value: jest.fn(unload),
            },
            replace: {
                enumerable: true,
                value: jest.fn(unload),
            },
        },
    );
    Object.defineProperty(window, "location", {
        enumerable: true,
        get: () => location,
    });
});

beforeEach(() => {
    Log.setLevel(Log.NONE);
    Log.setLogger(console);
});
