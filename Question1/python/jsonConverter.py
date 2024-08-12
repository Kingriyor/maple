def transformKey(keyString: str) -> str:
    result = ""
    skipIndex = set()
    for i in range(len(keyString)):
        if i == 0:
            result += keyString[i].lower()  
            continue
            
        if i in skipIndex:
            continue
        
        if (keyString[i] == '_') or (keyString[i] == '-'):
            result += keyString[i+1].upper()
            skipIndex.add(i+1)
        else:
            result += keyString[i] #.lower()  
    return result
    
    
def convert(myDict: dict) -> dict:
    newDict = {}
    for key, value in myDict.items():
        newDict[transformKey(key)] = value if isinstance(value, str) else convert(value) 
    
    return newDict

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


print(convert(sample_snake))
print("\n")
print(convert(sample_pascal))
print("\n")
print(convert(sample_kebab))
print("\n")
