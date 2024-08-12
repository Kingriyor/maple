function convertKey(keyString){
    var result = ""
    var skipIndex = new Set();
    for (var i = 0; i < keyString.length; i++) {
        if (i == 0){
            result += keyString.charAt(i).toLowerCase()
            continue;
        }
        if (skipIndex.has(i)){
            continue;
        }
        if ((keyString.charAt(i) == '_') || (keyString.charAt(i) == '-')){
            skipIndex.add(i+1);
            result += keyString.charAt(i+1).toUpperCase();
        }
        else{
            result += keyString.charAt(i); //.toLowerCase()
        }
    }
    return result;
}


function convert(currentJson){
    var result = {}
    for([key, val] of Object.entries(currentJson)) {
        result[convertKey(key)] = (typeof val === 'string')?  val : convert(val);
    }
    return result
}

sampleInput = {
    "first_name": "John",
    "last_name": "Doe",
    "contact_info": {
        "email_address": "john@example.com",
        "phone_number": {
            "home" : "123-456-7890",
            "work" : {
                "GeneralOffice" : "223-456-7890",
                "personal-office" : "323-456-7890"
            }
        }
    }
}

sampleInput2 = {
    "first_name": "John",
    "last_name": "Doe",
    "contact_info": "john@example.com"
}

sample_snake = {
    "first_name": "John",
    "last_name": "Doe",
    "contact_info": {
        "email_address": "john@example.com",
        "phone_number": "123-456-7890"
    }
}

sample_pascal = {
    "FirstName": "John",
    "LastName": "Doe",
    "ContactInfo": {
        "EmailAddress": "john@example.com",
        "PhoneNumber": "123-456-7890"
    }
}

sample_kebab = {
    "first-name": "John",
    "last-name": "Doe",
    "contact-info": {
        "email-address": "john@example.com",
        "phone-number": "123-456-7890"
    }
}


console.log("\n")
console.log(convert(sample_snake));
console.log("\n")
console.log(convert(sample_pascal));
console.log("\n")
console.log(convert(sample_kebab));
console.log("\n")

res = convert(sampleInput)
console.log(JSON.stringify(res));
console
console.log("\n")