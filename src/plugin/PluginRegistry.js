/**
 * PluginRegistry stores named framework capabilities.
 */
export default class PluginRegistry {
    constructor() {
        this._items = new Map();
    }

    _key(type, name) {
        return `${type}:${name}`;
    }

    register(type, name, value) {
        const key =
            this._key(type, name);

        if (this._items.has(key)) {
            throw new Error(
                `Capability already registered: ${key}`
            );
        }

        this._items.set(
            key,
            {
                type,
                name,
                value
            }
        );

        return this;
    }

    has(type, name) {
        return this._items.has(
            this._key(type, name)
        );
    }

    get(type, name) {
        const item =
            this._items.get(
                this._key(type, name)
            );

        return item
            ? item.value
            : null;
    }

    getAll(type = null) {
        const items =
            Array.from(
                this._items.values()
            );

        return type === null
            ? items
            : items.filter(
                item => item.type === type
            );
    }
}
