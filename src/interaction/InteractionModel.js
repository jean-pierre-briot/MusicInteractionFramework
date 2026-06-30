/**
 * Base class for interaction models.
 *
 * An InteractionModel analyses a Session and creates Relation objects.
 * It does not compute metric values.
 */
export default class InteractionModel {
    constructor({
        name = "Unnamed interaction model",
        metadata = {}
    } = {}) {
        this.name = name;
        this.metadata = metadata;
    }

    build(session) {
        throw new Error(
            `${this.constructor.name}.build(session) must be implemented`
        );
    }
}
