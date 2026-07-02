import {
    Plugin
} from "../../src/plugin/index.js";

import {
    JsonSessionLoader
} from "../../src/loader/index.js";

/**
 * Plugin registering the JSON session loader.
 */
export default class JsonLoaderPlugin extends Plugin {
    constructor() {
        super({
            name: "JsonLoaderPlugin",
            version: "0.4.0"
        });
    }

    install(context) {
        context.register(
            "loader",
            "json-session",
            new JsonSessionLoader()
        );
    }
}
