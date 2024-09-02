function convertJsonToObject(input) {
    const obj = JSON.parse(input);

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');