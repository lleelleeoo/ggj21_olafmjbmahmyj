const allowedStates = ['health', 'mind', 'sleep', 'bullets', 'item'];

actionParser = (actionString) => {
    const actions = actionString.split('@');
    const link = actions.shift();
    const nextEvent = parseInt(link);
    const add = {};
    const remove = {};

    if (link !== `${nextEvent}`) {
        throw new Error(`link is missing in ${actionString}`);
    }

    actions.forEach((action) => {
        const [state, sign, valueString] = action.split(/(\+|-)/);
        const value = parseInt(valueString);

        if (!allowedStates.includes(state)) {
            throw new Error(`invalid state '${state}' in '${actionString}'`)
        }

        if(state === 'item') {
            if (sign === '+') {
                add[state] ? add[state].push(valueString) : add[state] = [valueString];
            } else if (sign === '-') {
                remove[state] ? remove[state].push(valueString) : remove[state] = [valueString];
            } else {
                throw new Error(`invalid action '${action}' in '${actionString}'`);
            }

            return;
        }

        if (sign === '+') {
            add[state] ? add[state] += value : add[state] = value;
        } else if (sign === '-') {
            remove[state] ? remove[state] += value : remove[state] = value;
        } else {
            throw new Error(`invalid action '${action}' in '${actionString}'`);
        }
    });

    return {
        nextEvent, add, remove
    }
}

// for tests
try {
    module.exports = {
        actionParser
    }
} catch {}
