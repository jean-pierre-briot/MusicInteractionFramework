import {
    PluginManager
} from "../src/plugin/index.js";

import JsonLoaderPlugin
from "../plugins/json/JsonLoaderPlugin.js";

const data = {
    name: "Loader demo session",

    agents: [
        {
            id: "human",
            name: "Pianist",
            type: "human"
        },
        {
            id: "ai",
            name: "Continuator",
            type: "software"
        }
    ],

    sequences: [
        {
            id: "s1",
            name: "Pianist phrase",
            agent: "human",
            elements: [
                {
                    pitch: 60,
                    startTime: 0,
                    endTime: 1
                },
                {
                    pitch: 64,
                    startTime: 1,
                    endTime: 2
                }
            ]
        },
        {
            id: "s2",
            name: "Continuator phrase",
            agent: "ai",
            elements: [
                {
                    pitch: 67,
                    startTime: 2.2,
                    endTime: 3.2
                }
            ]
        }
    ],

    relations: [
        {
            id: "r1",
            name: "Imported response relation",
            source: "s1",
            target: "s2",
            model: "json-demo",
            attributes: {
                confidence: 1.0
            }
        }
    ]
};

const manager =
    new PluginManager();

manager.use(
    new JsonLoaderPlugin()
);

const loader =
    manager.get(
        "loader",
        "json-session"
    );

const result =
    await loader.load(data);

const session =
    result.session;

console.log("MIF LOADER DEMO", result);
console.log("Session", session);
console.log("Agents", session.getAgents());
console.log("Sequences", session.getSequences());
console.log("Relations", session.getRelations());

const app =
    document.getElementById("app");

if (app) {
    app.innerHTML = `
        <h2>Loader API Demo</h2>
        <p>Open the Chrome console to inspect the LoaderResult and imported Session.</p>
        <ul>
            <li>Agents: ${session.getAgents().length}</li>
            <li>Sequences: ${session.getSequences().length}</li>
            <li>Relations: ${session.getRelations().length}</li>
            <li>Loader format: ${result.metadata.format}</li>
        </ul>
    `;
}
