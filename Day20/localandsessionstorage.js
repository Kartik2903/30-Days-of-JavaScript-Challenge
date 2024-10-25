// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

function saveStringToLocalStorage(){
    let key = prompt("Enter key for local: ")
    let value = prompt("Enter value for local: ")

    window.localStorage.setItem(key, value)
    console.log(`Saved ${value} to local storage with ${key}.`);
}

function retrieveStringFromLocalStorage(){
    let key = prompt("Enter key to search: ")

    if(window.localStorage.getItem(key))
        console.log(`Retrieved value: ${window.localStorage.getItem(key)}`);
    else console.log(`No value found for ${key} key`);
}

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

function saveObjToLocalStorage(){
    let key = "myObj"
    let obj = {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "coding", "hiking"]
    }
    const jsonString = JSON.stringify(obj)
    window.localStorage.setItem(key, jsonString)

    console.log(`Saved ${JSON.stringify(obj)} to local storage with ${key}.`);
}

function retrieveObjFromLocalStorage(){
    let key = prompt("Search key for an object for local: ")
    const jsonString = window.localStorage.getItem(key)
    if(jsonString){
        console.log(`Retrieved value: ${jsonString}`);
    }
    else 
        console.log(`No value found for ${key} key`);
}

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

function saveFormDataToLocalStorage(event) {
    event.preventDefault();

    let name= document.getElementById("name").value
    let email= document.getElementById("mail").value

    const userData = {
        name: name,
        email: email
    }

    localStorage.setItem("userData", JSON.stringify(userData))
}

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

function removeFromLocalStorage(){
    let key = prompt("Enter key to delete from local:")

    console.log("Before Removal: ");
    for(let i=0;i<localStorage.length;i++){
        console.table(localStorage.key(i),":",localStorage.getItem(localStorage.key(i)));
    }
    localStorage.removeItem(key)

    console.log("After Removal: ");
    for(let i=0;i<localStorage.length;i++){
        console.table(localStorage.key(i),":",localStorage.getItem(localStorage.key(i)));
    }
}

// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

function saveStringToSessionStorage(){
    let key = prompt("Enter key for session: ")
    let value = prompt("Enter value for session: ")

    window.sessionStorage.setItem(key, value)
    console.log(`Saved ${value} to session storage with ${key}.`);
}

function retrieveStringFromSessionStorage(){
    let key = prompt("Enter key to search in session: ")

    if(window.sessionStorage.getItem(key))
        console.log(`Retrieved value: ${window.sessionStorage.getItem(key)}`);
    else console.log(`No value found for ${key} key`);
}

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

function saveObjToSessionStorage(){
    let key = "myObj"
    let obj = {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "coding", "hiking"]
    }
    const jsonString = JSON.stringify(obj)
    window.sessionStorage.setItem(key, jsonString)

    console.log(`Saved ${JSON.stringify(obj)} to Session storage with ${key}.`);
}

function retrieveObjFromSessionStorage(){
    let key = prompt("Search key for an object in session: ")
    const jsonString = window.sessionStorage.getItem(key)
    if(jsonString){
        console.log(`Retrieved value: ${jsonString}`);
    }
    else 
        console.log(`No value found for ${key} key.`)
}

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

function saveFormDataToSessionStorage(event) {
    event.preventDefault();

    let name= document.getElementById("Sessionname").value
    let email= document.getElementById("Sessionmail").value

    const sessionData = {
        name: name,
        email: email
    }

    sessionStorage.setItem("sessionData", JSON.stringify(sessionData))
}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

function removeFromSessionStorage(){
    let key = prompt("Enter key to delete from session: ")

    console.log("Before Removal: ");
    for(let i=0;i<sessionStorage.length;i++){
        console.table(sessionStorage.key(i),":",sessionStorage.getItem(sessionStorage.key(i)));
    }

    sessionStorage.removeItem(key)

    console.log("After Removal: ");
    for(let i=0;i<sessionStorage.length;i++){
        console.table(sessionStorage.key(i),":",sessionStorage.getItem(sessionStorage.key(i)));
    }
}

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function storeinbothmechnaisms(){
    let key = prompt("Enter key:")
    let value = prompt("Enter value:")

    localStorage.setItem(key, value)
    sessionStorage.setItem(key, value)

    console.log(`Value in local storage for key ${key}: ${localStorage.getItem(key)}`);
    console.log(`Value in session storage for key ${key}: ${sessionStorage.getItem(key)}`);
}

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearBothStorages(){
    localStorage.clear()
    sessionStorage.clear()

    console.log("Both storages are cleared.");
    
}

// Feature Request:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.