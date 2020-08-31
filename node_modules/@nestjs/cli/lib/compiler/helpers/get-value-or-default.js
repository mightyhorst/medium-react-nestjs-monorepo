"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValueOrDefault(configuration, propertyPath, appName, key, options = [], defaultValue) {
    const item = options.find(option => option.name === key);
    const origValue = item && item.value;
    if (origValue !== undefined && origValue !== null) {
        return origValue;
    }
    if (configuration.projects && configuration.projects[appName]) {
        const perAppValue = getValueOfPath(configuration, `projects.${appName}.`.concat(propertyPath));
        if (perAppValue !== undefined) {
            return perAppValue;
        }
    }
    let value = getValueOfPath(configuration, propertyPath);
    if (value === undefined) {
        value = defaultValue;
    }
    return value;
}
exports.getValueOrDefault = getValueOrDefault;
function getValueOfPath(object, propertyPath) {
    const fragments = propertyPath.split('.');
    let propertyValue = object;
    for (const fragment of fragments) {
        if (!propertyValue) {
            break;
        }
        propertyValue = propertyValue[fragment];
    }
    return propertyValue;
}
