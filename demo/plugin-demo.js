import {
    PluginManager
} from "../src/plugin/index.js";

import {
    Pipeline
} from "../src/pipeline/index.js";

import ExamplePlugin
from "../plugins/example/ExamplePlugin.js";

const manager =
    new PluginManager();

manager.use(
    new ExamplePlugin()
);

const ExampleStep =
    manager.get(
        "pipeline-step",
        "example-step"
    );

const pipeline =
    new Pipeline({
        name: "Plugin demo pipeline"
    });

pipeline.add(
    new ExampleStep()
);

const context =
    pipeline.run(null);

console.log("MIF PLUGIN DEMO");
console.log("Plugin manager", manager);
console.log("Registered plugins", manager.plugins());
console.log("Registered capabilities", manager.getAll());
console.log("Pipeline context", context);

const app =
    document.getElementById("app");

if (app) {
    app.innerHTML = `
        <h2>Plugin Architecture Demo</h2>
        <p>Open the Chrome console to inspect the PluginManager and registered capabilities.</p>
        <ul>
            <li>Plugins installed: ${manager.plugins().length}</li>
            <li>Capabilities registered: ${manager.getAll().length}</li>
            <li>Example step executed: ${context.get("example-plugin-ran")}</li>
        </ul>
    `;
}
