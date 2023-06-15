
import { useEffect } from "react";

const Blogs = () => {
    useEffect ( () => {
        document.title = "Blogs";
    },[])
    return (
        <div>
            <div>
                <h1 className="text-center m-2 bg-black text-red-500 p-4 font-black text-4xl rounded-full">** Blog{"'"}s **</h1>
            </div>
            <div className="bg-black border rounded-3xl">

                <div className="text-2xl text-[#f9dcd4] rounded-full lg:p-20 md:p-15 p-10">
                    <h1 className="font-black"><strong className="text-red-400">Question 01 : </strong>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p><strong className="text-red-400">Ans:</strong><br /><strong className="underline underline-offset-8">Access Token : </strong>
                        An access token is a credential that is issued to a user by an authentication server after successful authentication. It is a short-lived token that grants access to specific resources or APIs on behalf of the authenticated user. Access tokens are typically included in the header of HTTP requests to authenticate and authorize the user to access protected resources.
                        <br />
                        <strong className="underline underline-offset-8">Refresh Token : </strong>
                        A refresh token is a long-lived token that is also issued during the authentication process. Unlike an access token, a refresh token is not sent with each request to protected resources. Instead, it is securely stored on the client-side (e.g., in a cookie or local storage).<br />

                        <p className="pt-3 underline underline-offset-8">Here is how they typically work and where they should be stored : </p>
                        <li>Obtaining Access and Refresh Tokens</li>
                        <li>Storing Tokens on the Client-side</li>
                        <li>Access Token</li>
                        <li>Refresh Token</li>
                        <li>Access Token Usage</li>
                    </p>
                </div>
            </div>
            <div className="bg-black border rounded-3xl">

                <div className="text-2xl text-[#f9dcd4] rounded-full lg:p-20 md:p-15 p-10">
                    <h1 className="font-black"><strong className="text-red-400">Question 02 : </strong>Compare SQL and NoSQL databases?</h1>
                    <p><strong className="text-red-400">Ans:</strong><br /><strong className="underline underline-offset-8">SQL : </strong>
                        Databases are categorized as Relational Database Management System.SQL databases have fixed or static or predefined schema.SQL databases display data in form of tables so it is known as table-based database.SQL databases are vertically scalable.SQL databases use a powerful language Structured Query Language to define and manipulate the data.SQL databases are best suited for complex queries.SQL databases are not best suited for hierarchical data storage.MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database.
                        <br />
                        <strong className="underline underline-offset-8">NoSQL : </strong>
                        NoSQL databases are categorized as Non-relational or distributed database system.NoSQL databases have dynamic schema.NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.NoSQL databases are horizontally scalable.In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.NoSQL databases are best suited for hierarchical data storage.MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of no sql database

                    </p>
                </div>

            </div>
            <div className="bg-black border rounded-3xl">

                <div className="text-2xl text-[#f9dcd4] rounded-full lg:p-20 md:p-15 p-10">
                    <h1 className="font-black"><strong className="text-red-400">Question 03 : </strong>What is express js? What is Nest JS?</h1>
                    <p><strong className="text-red-400">Ans:</strong><br /><strong className="underline underline-offset-8">Express.js : </strong>
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features and tools for building web servers and APIs. Express.js follows the middleware pattern, allowing you to define a series of middleware functions that handle incoming HTTP requests and perform various operations such as routing, authentication, request/response modification, and error handling.
                        <br />
                        <strong className="underline underline-offset-8">NestJS : </strong>
                        NestJS is a progressive and opinionated Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and takes advantage of TypeScripts features like strong typing, decorators, and dependency injection. NestJS is heavily influenced by Angular s architecture and shares many concepts and patterns with it.

                    </p>
                </div>

            </div>
            <div className="bg-black border rounded-3xl">

                <div className="text-2xl text-[#f9dcd4] rounded-full lg:p-20 md:p-15 p-10">
                    <h1 className="font-black"><strong className="text-red-400">Question 04 : </strong>What is MongoDB aggregate and how does it work (google it)?</h1>
                    <p><strong className="text-red-400">Ans:</strong><br /><strong className="underline underline-offset-8">MongoDB aggregate : </strong>

                        Aggregation in MongoDB allows for the transforming of data and results in a more powerful fashion than from using the find() command. Through the use of multiple stages and expressions, you are able to build a pipeline of operations on your data to perform analytic operations.
                        <br />
                        <strong className="underline underline-offset-8">W run orks : </strong>
                        An aggregation pipeline consists of one or more stages that process documents: Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values. The documents that are output from a stage are passed to the next stage.

                    </p>
                </div>

            </div>

        </div>
    );
};

export default Blogs;