// async function name() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json('')
//     return users.map((u) => u.name);
//     console.log(users);
// }
// name()

// async function main() {
//   const names = await name();  
//   console.log(names);
// }

// main();


// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error("Сервер катасы: " + response.status);
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Ката чыкты:", error.message);
//   }
// }

// getUsers();


// async function email() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json('')
//     return users.map((u) => u.email);
//     console.log(users);
// }
// email()
// async function phone() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json('')
//     return users.map((u) => u.phone);
//     console.log(users);
// }
// phone()

// async function main() {
//    const emails = await email();  
//    console.log(emails);
//     const phones = await phone();  
//    console.log(phones);
// }

// main();






async function email() {
  try {
    const res = await fetch('');
    if (!res.ok) {
      throw new Error('Ката чыкты');
    }
    const users = await res.json();
    return users.map((u) => u.email);
  } catch (error) {
    console.log('Email катасы:', error);
  }
}

async function phone() {
  try {
    const res = await fetch('');
    if (!res.ok) {
      throw new Error('Ката чыкты');
    }
    const users = await res.json();
    return users.map((u) => u.phone);
  } catch (error) {
    console.log('Телефон катасы:', error);
  }
}

async function main() {
  const emails = await email();
  console.log(emails);

  const phones = await phone();
  console.log(phones);
}

main();

