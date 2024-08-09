// 1.  Is Node.js single-threaded?
// Yes, Node.js is single-threaded by default. However, it utilizes event-driven architecture and non-blocking I/O operations to handle multiple concurrent requests efficiently, enabling scalability and high performance in applications.

// 2. There are two types of API functions supported by Node.js:

// Synchronous: These API functions are used for blocking code.
// Asynchronous: These API functions are used for non-blocking code.

// 3. What is a module in Node.js?
// In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders. Modules are useful because of their reusability and ability to reduce the complexity of code into smaller pieces. Some examples of modules are. http, fs, os, path, etc.

// 4. What is middleware?
// Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.

// 5. How does Node.js handle concurrency even after being single-threaded?
// Node.js handles concurrency by using asynchronous, non-blocking operations. Instead of waiting for one task to complete before starting the next, it can initiate multiple tasks and continue processing while waiting for them to finish, all within a single thread.

// 6. What is control flow in Node.js?
// Control flow in Node.js refers to the sequence in which statements and functions are executed. It manages the order of execution, handling asynchronous operations, callbacks, and error handling to ensure smooth program flow.

// 7. What do you mean by event loop in Node.js?
// The event loop in Node.js is a mechanism that allows it to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions.


// 8. What is the order in which control flow statements get executed?
// The order in which the statements are executed is as follows:

// Execution and queue handling
// Collection of data and storing it
// Handling concurrency
// Executing the next lines of code


// 9. What is REPL in Node.js?
// REPL in Node.js stands for Read, Evaluate, Print, and Loop. It is a computer environment similar to the shell which is useful for writing and debugging code as it executes the code in on go.

// 10. How to import a module in Node.js?
// We use the require module to import the External libraries in Node.js. The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.

// 11. What is the difference between Node.js and AJAX?
// Node.js is a JavaScript runtime environment that runs on the server side whereas AJAX is a client-side programming language that runs on the browser.

// 12. What is package.json in Node.js?
// package.json in Node.js is a metadata file that contains project-specific information such as dependencies, scripts, version, author details, and other configuration settings required for managing and building the project.

// 13. What is event-driven programming in Node.js?
// Event-driven programming is used to synchronize the occurrence of multiple events and to make the program as simple as possible. The basic components of an Event-Driven Program are:
// A callback function ( called an event handler) is called when an event is triggered.
// An event loop that listens for event triggers and calls the corresponding event handler for that event.


// Understanding Event-Driven Programming
// Event-driven programming is a paradigm in which the flow of a program is determined by events such as user actions, system notifications, or data availability. In Node.js, the event-driven model allows developers to write non-blocking, asynchronous code that responds to events as they occur, without waiting for blocking operations to complete.

// Events and Event Emitters
// Events: Events are signals indicating that a particular action or state change has occurred. In Node.js, events are represented by strings (event names) and associated data (event payloads).
// Event Emitters: An event emitter is an object capable of emitting events. It provides methods to register event listeners (callbacks) for specific events and trigger those listeners when the corresponding events occur.

        const EventEmitter = require('node:events');
        const eventEmitter = new EventEmitter();
        eventEmitter.on('start', () => {
            console.log('started');
        });

        eventEmitter.emit('start');

        eventEmitter.on('start', (start, end) => {
            console.log(`started from ${start} to ${end}`);
          });
          
        eventEmitter.emit('start', 1, 100);
          

// 14. What is buffer in Node.js?
// The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.  

// 15. What are streams in Node.js?
// Streams are a type of data-handling method and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way. The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances.

// Types of Stream:

// Readable stream: It is the stream from where you can receive and read the data in an ordered fashion. However, you are not allowed to send anything. For example, fs.createReadStream() lets us read the contents of a file.
// Writable stream: It is the stream where you can send data in an ordered fashion but you are not allowed to receive it back. For example, fs.createWriteStream() lets us write data to a file.
// Duplex stream: It is the stream that is both readable and writable. Thus you can send in and receive data together. For example, net.Socket is a TCP socket.
// Transform stream: It is the stream that is used to modify the data or transform it as it is read. The transform stream is basically a duplex in nature. For example, zlib.createGzip stream is used to compress the data using gzip.


// 16. Explain crypto module in Node.js
// The crypto module is used for encrypting, decrypting, or hashing any type of data. This encryption and decryption basically help to secure and add a layer of authentication to the data. The main use case of the crypto module is to convert the plain readable text to an encrypted format and decrypt it when required.

//  Explain the use of passport module in Node.js
// The passport module is used for adding authentication features to our website or web app. It implements authentication measure which helps to perform sign-in operations.

// Explain DNS module in Node.js
// DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup. Its main advantage is that there is no need for memorizing IP addresses – DNS servers provide a nifty solution for converting domain or subdomain names to IP addresses.

// 17. What is callback hell?
// Callback hell is an issue caused due to a nested callback. This causes the code to look like a pyramid and makes it unable to read To overcome this situation we use promises.

// 18. Explain the util module in Node.js
// The Util module in node.js provides access to various utility functions. There are various utility modules available in the node.js module library.

// OS Module: Operating System-based utility modules for node.js are provided by the OS module. 
// Path Module: The path module in node.js is used for transforming and handling various file paths. 
// DNS Module: DNS Module enables us to use the underlying Operating System name resolution functionalities. The actual DNS lookup is also performed by the DNS Module. 
// Net Module: Net Module in node.js is used for the creation of both client and server. Similar to DNS Module this module also provides an asynchronous network wrapper.

// 48. How to handle environment variables in Node.js?
// We use process.env to handle environment variables in Node.js. We can specify environment configurations as well as keys in the .env file. To access the variable in the application, we use the “process.env.VARIABLE_NAME” syntax. To use it we have to install the dotenv package using the below command:

// npm install dotenv