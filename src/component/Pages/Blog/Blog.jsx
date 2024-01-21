import React from "react";
import { GoArrowRight } from "react-icons/go";
import { LiaEqualsSolid } from "react-icons/lia";
const Blog = () => {
  return (
    <div className="mt-24 bg-white w-full mx-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-8">
      <h2 className="text-5xl font-bold text-center my-10">Blog</h2>
      <div className=" ml-20 mb-10">
        <div className="space-y-3">
          <h2 className="flex items-center text-2xl font-bold">
            <span className="flex items-center text-4xl">
              Q.1 <GoArrowRight></GoArrowRight>
            </span>{" "}
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <div className="space-y-2">
            <h4 className="text-4xl text-yellow-500">Answer :</h4>

            <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
              1.1{" "}
              <span className="">
                <GoArrowRight></GoArrowRight>
              </span>{" "}
              <span className="underline">Access Token </span> :{" "}
              <p className="ml-2">
                The access token is re-issued, provided the refresh token is a
                valid one requesting permission to access confidential
                resources.
              </p>
            </h6>
            <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
              1.2{" "}
              <span className="">
                <GoArrowRight></GoArrowRight>
              </span>{" "}
              <span className="underline">Refresh Token </span> :{" "}
              <p className="ml-2">
                A refresh token just helps you re-validate a user without them
                having to re-enter their login credentials multiple times.
              </p>
            </h6>
            <div className="mt-5 space-y-4">
              <h4 className="text-3xl font-semibold mt-5 mb-5">
                How They Work :
              </h4>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.1{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">Authentication </span> :{" "}
                <p className="ml-2">
                  He user authenticates with the authorization server (e.g.,
                  through a login process).
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.2{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">Authorization </span> :{" "}
                <p className="ml-2">
                  He authorization server issues an access token and,
                  optionally, a refresh token to the application after
                  successful authentication.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.3{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">API Requests </span> :{" "}
                <p className="ml-2">
                  The application includes the access token in API requests to
                  authenticate and authorize access to protected resources.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.4{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">Token Expiry</span> :{" "}
                <p className="ml-2">
                  The application can use the refresh token to obtain a new
                  access token without requiring user credentials
                </p>
              </h6>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-semibold mt-5">
                where should we store them on the client-side?
              </h4>
              <p className="ml-10 text-gray-500 text-2xl font-semibold">
                Refresh tokens are usually stored securely on the server side,
                while access tokens are stored on the browser side. When an
                access token expires,
                <br /> the browser can request a new one from the server using
                the refresh token
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full ml-20 mb-10">
        <div className="space-y-3">
          <h2 className="flex items-center text-2xl font-bold">
            <span className="flex items-center text-4xl">
              Q.2 <GoArrowRight></GoArrowRight>
            </span>{" "}
            Compare SQL and NoSQL databases?
          </h2>
          <div className="w-9/12 mx-auto">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 dark:border-neutral-500"
                          >
                            Number
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 dark:border-neutral-500"
                          >
                            SQL
                          </th>
                          <th scope="col" className="px-6 py-4">
                            NoSQL
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            1
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Non-relational or distributed database system.
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            2
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            These databases have fixed or static or predefined
                            schema
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            They have a dynamic schema
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            3
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            These databases are not suited for hierarchical data
                            storage.
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            These databases are best suited for hierarchical
                            data storage.
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            4
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            These databases are best suited for complex queries
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            These databases are not so good for complex queries
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            5
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Vertically Scalable
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Horizontally scalable
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            6
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Follows ACID property
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Follows CAP(consistency, availability, partition
                            tolerance)
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            7
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server,
                            etc
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            Examples: MongoDB, HBase, Neo4j, Cassandra, etc
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500"></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-20 mb-10">
        <div className="space-y-3">
          <h2 className="flex items-center text-2xl font-bold">
            <span className="flex items-center text-4xl">
              Q.3 <GoArrowRight></GoArrowRight>
            </span>{" "}
            What is express js? What is Nest JS (google it)?
          </h2>
          <div className="space-y-2">
            <h4 className="text-4xl text-yellow-500">Answer :</h4>

            <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
              1.1 <GoArrowRight></GoArrowRight>
              <span className="underline flex items-center">
                Express{" "}
              </span> :{" "}
              <p className="ml-2">
                Express is a node js web application framework that provides
                broad features for building web and mobile applications.
              </p>
            </h6>
            <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
              1.2 <GoArrowRight></GoArrowRight>
              <span className="underline flex items-center">
                Nest JS
              </span> :{" "}
              <p className="ml-2">
                Nest. JS is a framework for building efficient and scalable
                server-side applications using JavaScript or TypeScript.
              </p>
            </h6>
          </div>
        </div>
      </div>
      <div className=" ml-20 mb-10">
        <div className="space-y-3">
          <h2 className="flex items-center text-2xl font-bold">
            <span className="flex items-center text-4xl">
              Q.4 <GoArrowRight></GoArrowRight>
            </span>{" "}
            What is MongoDB aggregate and how does it work (google it)?
          </h2>
          <div className="space-y-2">
            <h4 className="text-4xl text-yellow-500">Answer :</h4>

            <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
              1.1 <GoArrowRight></GoArrowRight>
              <span className="underline">MongoDB aggregate</span> :{" "}
              <p className="ml-2">
                MongoDB aggregation is a way to process a large number of
                documents in a collection.
              </p>
            </h6>
            <div className="mt-5 space-y-4">
              <h4 className="text-3xl font-semibold mt-5 mb-5">
                How does it work :
              </h4>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.1{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">$match </span> :{" "}
                <p className="ml-2">
                  Filters documents based on specified criteria.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.2{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">$project</span> :{" "}
                <p className="ml-2">
                  Reshapes documents by including, excluding, or renaming
                  fields.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.3{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">$group </span> :{" "}
                <p className="ml-2">
                  Groups documents based on specified criteria, allowing for the
                  computation of aggregate values (e.g.counts, sums,) within
                  each group.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.4{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">$sort</span> :{" "}
                <p className="ml-2">
                  Orders documents based on specified criteria.
                </p>
              </h6>
              <h6 className="flex items-center text-2xl ml-5 font-semibold text-gray-500">
                1.5{" "}
                <span className="">
                  <GoArrowRight></GoArrowRight>
                </span>{" "}
                <span className="underline">$limit</span> :{" "}
                <p className="ml-2">
                  Limits the number of documents passed to the next stage in the
                  pipeline
                </p>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
