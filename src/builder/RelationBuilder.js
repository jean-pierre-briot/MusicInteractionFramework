import Builder from "./Builder.js";
import Relation from "../core/Relation.js";
import Provenance from "../core/Provenance.js";

/**
 * Builds Relation objects in a controlled and reproducible way.
 */
export default class RelationBuilder extends Builder {
    constructor({
        name = "Relation builder",
        metadata = {}
    } = {}) {
        super({
            name,
            metadata
        });

        this.reset();
    }

    reset() {
        this._source = null;
        this._target = null;
        this._model = null;
        this._directed = true;
        this._name = null;
        this._metadata = {};
        this._attributes = {};
        this._provenance = null;

        return this;
    }

    named(name) {
        this._name = name;
        return this;
    }

    from(source, target) {
        this._source = source;
        this._target = target;
        return this;
    }

    model(model) {
        this._model = model;
        return this;
    }

    directed(value = true) {
        this._directed = value;
        return this;
    }

    metadata(metadata = {}) {
        this._metadata = metadata;
        return this;
    }

    attribute(key, value) {
        this._attributes[key] = value;
        return this;
    }

    provenance(provenance) {
        this._provenance = provenance;
        return this;
    }

    build() {
        if (!this._source || !this._target) {
            throw new Error(
                "RelationBuilder requires both source and target sequences"
            );
        }

        const provenance =
            this._provenance
            ??
            new Provenance({
                source: this._model,
                method: "RelationBuilder.build"
            });

        const relation =
            new Relation({
                name: this._name,
                source: this._source,
                target: this._target,
                model: this._model,
                directed: this._directed,
                metadata: {
                    ...this._metadata,
                    provenance
                }
            });

        for (const [key, value] of Object.entries(this._attributes)) {
            relation.setAttribute(key, value);
        }

        this.reset();

        return relation;
    }
}
