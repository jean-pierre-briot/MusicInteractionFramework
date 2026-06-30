import MetricResult from "../core/MetricResult.js";

/**
 * Applies metrics and stores their results as MetricResult objects.
 */
export default class MetricEngine {
    compute(metric, target) {
        const value =
            Array.isArray(target)
                ? metric.compute(...target)
                : metric.compute(target);

        return new MetricResult({
            metric,
            target,
            value
        });
    }
}
