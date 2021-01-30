parseEvent = (event) => ({
    caption: event[0],
    options: extractOptions(event.slice(2)),
    picture: event[1]
})

const extractOptions = (input) => {
    if (input.length % 3) {
        throw new Error(`incorrect options sequence ${spread}`);
    }

    const spread = [...input];
    const extracted = [];

    while (spread.length) {
        const predicate = spread.shift();
        const caption = spread.shift();
        const action = spread.shift();

        extracted.push({
            predicate,
            caption,
            action,
        });
    }

    return extracted;
}

// for tests
try {
    module.exports = {
        parseEvent, extractOptions
    }
} catch {}
