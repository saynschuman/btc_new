export default (values, changeOn) => {
    return JSON.parse(JSON.stringify(values, (k, v) => {
        if (v === undefined) { return changeOn; } return v;
    }));
}