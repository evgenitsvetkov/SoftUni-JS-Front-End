function convertObjectToJson(name, lastName, hairColor) {
    const person = {
        name, 
        lastName, 
        hairColor
    };

    const jsonString = JSON.stringify(person);
    return jsonString;
}

convertObjectToJson('George', 'Jones', 'Brown');