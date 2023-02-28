import yn from "yn";

const collectCoverage = yn(process.env.CI);

export default {
    preset: "ts-jest",
    clearMocks: true,
    setupFilesAfterEnv: ["./test/setup.ts"],
    testMatch: ["**/{src,test}/**/*.test.ts"],
    testEnvironment: "jsdom",
    collectCoverage,
    coverageReporters: collectCoverage ? ["lcov"] : ["lcov", "text"],
    extensionsToTreatAsEsm: ['.ts'],
    preset: 'ts-jest/presets/default-esm',
    transform: {
        '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }],
 
    },
};
