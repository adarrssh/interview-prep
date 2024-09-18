// 1.  Is Node.js single-threaded?
// Yes, Node.js is single-threaded by default. However, it utilizes event-driven architecture and non-blocking I/O operations to handle multiple concurrent requests efficiently, enabling scalability and high performance in applications.


// I/O operations
// In Node.js, I/O operations refer to any input or output tasks that involve interacting with external resources. These operations are crucial for building applications that read from or write to files, databases, networks, or other external systems

// 2. There are two types of API functions supported by Node.js:

// Synchronous: These API functions are used for blocking code.
// Asynchronous: These API functions are used for non-blocking code.

// 3. What is a module in Node.js?
// In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders. Modules are useful because of their reusability and ability to reduce the complexity of code into smaller pieces. Some examples of modules are. http, fs, os, path, etc.

// 4. What is middleware?
// Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.


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
// Event-driven programming is a paradigm in which the flow of a program is determined by events. In Node.js, the event-driven model allows developers to write non-blocking, asynchronous code that responds to events as they occur, without waiting for blocking operations to complete
//. The basic components of an Event-Driven Program are:
// A callback function ( called an event handler) is called when an event is triggered.
// An event loop that listens for event triggers and calls the corresponding event handler for that event.


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



// 5. How does Node.js handle concurrency even after being single-threaded?
// Node.js handles concurrency by using asynchronous, non-blocking operations. Instead of waiting for one task to complete before starting the next, it can initiate multiple tasks and continue processing while waiting for them to finish, all within a single thread.


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

// How to handle environment variables in Node.js?
// We use process.env to handle environment variables in Node.js. We can specify environment configurations as well as keys in the .env file. To access the variable in the application, we use the “process.env.VARIABLE_NAME” syntax. To use it we have to install the dotenv package using the below command:
// npm install dotenv

// What is web socket?
// Web Socket is a protocol that provides full-duplex (multiway) communication i.e. allows communication in both directions simultaneously. It is a modern web technology in which there is a continuous connection between the user’s browser (client) and the server. In this type of communication, between the web server and the web browser, both of them can send messages to each other at any point in time. Traditionally on the web, we had a request/response format where a user sends an HTTP request and the server responds to that. This is still applicable in most cases, especially those using RESTful API. But a need was felt for the server to also communicate with the client, without getting polled(or requested) by the client. The server in itself should be able to send information to the client or the browser. This is where Web Socket comes into the picture.


//  What is a cluster in Node.js?

// Node.js clusters are a built-in feature of Node.js that allows applications to spawn multiple instances of the Node.js process, each running on a separate core of the CPU. Clusters enable horizontal scaling of Node.js applications to take advantage of multi-core systems.

// to handle workload efficiently and to take advantage of computer multi-core systems, cluster modules are created that provide us the way to make child processes that run simultaneously with a single parent process.

// Unlike a load balancer, which can balance traffic across multiple servers running different applications, Node.js clusters are limited to distributing traffic among instances of the same Node.js application running on the same server.

// Explain some of the cluster methods in Node.js
// Fork(): It creates a new child process from the master. The isMaster returns true if the current process is master or else false.
// isWorker: It returns true if the current process is a worker or else false.
// process: It returns the child process which is global.
// send(): It sends a message from worker to master or vice versa. 
// kill(): It is used to kill the current worker.


// * Worker Threads:
//     * Worker Threads are part of the worker_threads module introduced in Node.js version 10.
//     * Worker Threads allow you to create multiple JavaScript threads within a single Node.js process. These threads can execute JavaScript code concurrently, sharing memory and resources.
//     * Worker Threads are ideal for CPU-bound tasks that can be parallelized, such as heavy computation or data processing.
//     * Each worker thread operates independently with its own event loop and can execute JavaScript code in parallel with other threads.
//     * Communication between worker threads and the main thread is achieved through a message-passing mechanism, using the postMessage() and on('message') APIs.
//     * Unlike clusters, worker threads do not share the same server port. They are more low-level and flexible, allowing developers to implement custom threading patterns and parallel algorithms.



// child processes
// In Node.js, child processes allow you to create and manage subprocesses from within your Node.js application. This is useful for performing tasks that are resource-intensive or need to be executed independently of the main Node.js event loop. Child processes can be used to run shell commands, execute other programs, or handle parallel processing.

// Key Features of Child Processes
// Isolation: Each child process runs in its own separate environment, meaning it does not share memory with the parent process. This isolation helps in avoiding conflicts and ensures that the child process can run independently.

// Concurrency: Child processes enable parallel execution of tasks, which can improve performance by leveraging multiple CPU cores or performing tasks concurrently.

// Inter-process Communication: Child processes can communicate with the parent process through standard input/output (stdin, stdout, stderr), allowing for data exchange and synchronization.

// Creating Child Processes in Node.js
// Node.js provides a built-in module called child_process to handle child processes. This module offers several methods for creating and managing child processes:

// 1. spawn()
// Description: Launches a new process with a specified command and arguments. The child process can be interacted with via streams.
// Usage: Useful for long-running processes or when you need to stream data between the parent and child processes.
// javascript
    const { spawn } = require('child_process');

    const ls = spawn('ls', ['-lh', '/usr']);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
// 2. exec()
// Description: Executes a command in a shell and buffers the output. It is suitable for short-lived commands.
// Usage: Useful for executing shell commands and obtaining the output in a callback.
// javascript
    const { exec } = require('child_process');

    exec('ls -lh /usr', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
// 3. execFile()
// Description: Similar to exec(), but directly executes a file without a shell. This method is more secure and performant when running executable files.
// Usage: Ideal for running executables with arguments.
    const { execFile } = require('child_process');

    execFile('ls', ['-lh', '/usr'], (error, stdout, stderr) => {
      if (error) {
        console.error(`execFile error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
// 4. fork()
// Description: Creates a new Node.js process and establishes a communication channel between the parent and child processes using IPC (Inter-Process Communication).
// Usage: Useful for running Node.js scripts as child processes and communicating between them.

    const { fork } = require('child_process');

    const child = fork('child.js');

    child.on('message', (message) => {
      console.log(`Message from child: ${message}`);
    });

    child.send({ hello: 'world' });


// Differentiate between process.nextTick() and setImmediate()?
// The distinction between method and product. This is accomplished through the use of nextTick() and setImmediate(). next Tick() postpones the execution of action until the next pass around the event loop, or it simply calls the callback function once the event loop's current execution is complete, whereas setImmediate() executes a callback on the next cycle of the event loop and returns control to the event loop for any I/O operations.


// What is piping in Node.js?
// Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream