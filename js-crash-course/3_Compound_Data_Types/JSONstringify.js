nestedJSON = JSON.stringify(nested, null, 2);
console.log(nestedJSON);
{
    "name": "Outer",
    "content": {
        "name": "Middle",
        "content": {
            "name": "Inner",
            "content": "Whoa..."
        }
    }
}