Camel Case Converter ([questionLink](https://docs.google.com/document/d/1JBkEgan03M6dWyfKBQhzHzxu-0TuMLpBSoJxGazA-rc/edit))

Sample problem
You have been given a JSON object that contains keys in 4 cases (camelCase, snake_case, PascalCase, kebab-case). Your task is to implement a function that will normalize all the keys to camelCase.

Write a function `normalizeKeys(jsonObject)` that takes a JSON object as input and returns a new JSON object with all keys converted to camelCase. You can assume that the input JSON object only contains string keys, string values, and nested JSON objects as values (no arrays or other types).


Example input JSON:
{
"first_name": "John",
"last_name": "Doe",
"contact_info": {
"email_address": "john@example.com",
"phone_number": "123-456-7890"
}
}



Example output JSON:
{
"firstName": "John",
"lastName": "Doe",
"contactInfo": {
"emailAddress": "john@example.com",
"phoneNumber": "123-456-7890"
}
}

Notes
The function should maintain the structure of the input JSON while changing the keys.
You can assume that the input JSON is well-formed and the keys properly follow one of the 4 casing conventions (camelCase, snake_case, PascalCase, kebab-case).

Constraints:
The input JSON object will have at most 100 keys.
The input JSON object will be limited to a depth of 5.
The length of each key is at most 50 characters.
Don’t use regex - this makes the problem more challenging which results in better practice.
