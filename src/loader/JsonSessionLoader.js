import Loader from "./Loader.js";
import LoaderResult from "./LoaderResult.js";

import {
    Agent,
    NoteEvent,
    Sequence,
    Relation,
    Session,
    Provenance
} from "../core/index.js";

/**
 * JsonSessionLoader imports a simple JSON representation into a Session.
 */
export default class JsonSessionLoader extends Loader {
    constructor() {
        super({
            name: "JSON Session Loader",
            format: "json-session"
        });
    }

    async load(input) {
        const data =
            typeof input === "string"
                ? JSON.parse(input)
                : input;

        const session =
            new Session({
                name: data.name ?? "Imported JSON session",
                metadata: data.metadata ?? {}
            });

        const agentsById =
            new Map();

        const sequencesById =
            new Map();

        for (const agentData of data.agents ?? []) {
            const agent =
                new Agent({
                    id: agentData.id,
                    name: agentData.name,
                    type: agentData.type,
                    metadata: agentData.metadata ?? {}
                });

            agentsById.set(agent.id, agent);
            session.add(agent);
        }

        for (const sequenceData of data.sequences ?? []) {
            const agent =
                agentsById.get(sequenceData.agent);

            const elements =
                (sequenceData.elements ?? []).map(
                    element =>
                        new NoteEvent({
                            id: element.id,
                            name: element.name,
                            pitch: element.pitch,
                            velocity: element.velocity ?? 100,
                            startTime: element.startTime,
                            endTime: element.endTime,
                            metadata: element.metadata ?? {}
                        })
                );

            const sequence =
                new Sequence({
                    id: sequenceData.id,
                    name: sequenceData.name,
                    agent,
                    elements,
                    metadata: sequenceData.metadata ?? {}
                });

            sequencesById.set(sequence.id, sequence);
            session.add(sequence);
        }

        for (const relationData of data.relations ?? []) {
            const relation =
                new Relation({
                    id: relationData.id,
                    name: relationData.name,
                    source: sequencesById.get(relationData.source),
                    target: sequencesById.get(relationData.target),
                    model: relationData.model ?? "json-import",
                    directed: relationData.directed ?? true,
                    metadata: relationData.metadata ?? {}
                });

            for (const [key, value] of Object.entries(relationData.attributes ?? {})) {
                relation.setAttribute(key, value);
            }

            session.add(relation);
        }

        return new LoaderResult({
            session,
            provenance:
                new Provenance({
                    source: "JsonSessionLoader",
                    method: "load",
                    version: "0.4.0"
                }),
            warnings: [],
            metadata: {
                format: this.format
            }
        });
    }
}
