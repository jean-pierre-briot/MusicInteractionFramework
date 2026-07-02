/**
 * LoaderRegistry stores loaders by format.
 */
export default class LoaderRegistry {
    constructor() {
        this._loaders = new Map();
    }

    register(format, loader) {
        if (this._loaders.has(format)) {
            throw new Error(
                `Loader already registered for format: ${format}`
            );
        }

        this._loaders.set(format, loader);

        return this;
    }

    has(format) {
        return this._loaders.has(format);
    }

    get(format) {
        return this._loaders.get(format) ?? null;
    }

    formats() {
        return Array.from(this._loaders.keys());
    }

    loaders() {
        return Array.from(this._loaders.values());
    }
}
