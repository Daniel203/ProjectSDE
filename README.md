# Auth0 Authentication and Authorization Examples

This repository provides examples for implementing authentication and authorization using Auth0, a powerful and flexible identity management platform. The examples are designed to showcase the integration of Auth0 into your applications, demonstrating how to handle user authentication and role-based access control (RBAC) authorization.

## Table of Contents

- [Getting Started](#getting-started)
- [Authentication Example](#authentication-example)
- [RBAC Example](#rbac-example)

## Getting Started

To get started with these examples, follow the steps below:

1. Clone the repository:

   ``` bash
   git clone https://github.com/Daniel203/ProjectSDE.git
   ```

2. Set up an Auth0 account:

   - Sign up for an account at [Auth0](https://auth0.com) if you don't have one already.
   - Create a new Auth0 application in the Auth0 Dashboard. You will use this application for all the examples in this repository.

3. Configure the Auth0 application:

   - In the Auth0 Dashboard, go to the "Settings" tab for your application.
   - Under "Application URIs", add the following URLs:
    	* Allowed Callback URLs: <http://localhost:4040/callback>
    	* Allowed Logout URLs: <http://localhost:4040>
    	* Allowed Web Origins: <http://localhost:4040>


## Authentication Example

### Introduction

The authentication example demonstrates how to implement user authentication using Auth0. It shows how to redirect the user to the Auth0 login page, how to handle the login response, and how to use the Auth0 API to validate the user's credentials.

### Available Information

All the information you need to know about the authentication example can be found in the `01-authentication` folder.


## RBAC Example

### Introduction

The RBAC example demonstrates how to implement role-based access control using Auth0. It shows how to define roles and assign them to users and how to use the Auth0 API to enforce access control.

### Folder Structure

The RBAC example is located in the `02-authorization` folder. The folder contains the following files/folders:

* `client`: The React client that handles the user interface
* `server`: The Express server that defines the APIs.

### Available Information

All the information you need to know about the authentication example can be found in the `02-authorization` folder.
