# Auth0 Authentication & Authorization - React SPA, Express Server

This repository contains a React application and an Express server that work
together to implement authentication and authorization using Auth0. The React
application handles the frontend user interface, while the Express server
manages the authentication and authorization processes.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prepare the project](#prepare-the-project)
  - [Get the Auth0 Audience](#get-the-auth0-audience)
  - [Run the project](#run-the-project)
- [Project Structure](#project-structure)
  - [Client](#client)
  - [Server](#server)

## Getting Started

### Prepare the project

To get started with this example, follow the steps below: \
Skip to the step 4 if you have already created an application and have already
changed the URLs.

1. Clone the repository:
    ``` bash
    git clone https://github.com/Daniel203/ProjectSDE.git
    ```

2. Set up an Auth0 account:
    - Sign up for an account at [Auth0](https://auth0.com) if you don't have one already.
    - Create a new Auth0 Single Page Application in the Auth0 Dashboard. You
      will use this application for all the examples in this repository.

3. Configure the Auth0 application:
    - In the Auth0 Dashboard, go to the "Settings" tab for your application.
    - Under "Application URIs", add the following URLs:
        * Allowed Callback URLs: <http://localhost:4040/callback, http://localhost:4040>
        * Allowed Logout URLs: <http://localhost:4040>
        * Allowed Web Origins: <http://localhost:4040>

4. Install npm packages (Client):
    - Open your command line interface.
    - Navigate to the project root directory.
        ``` bash
        cd 02-authorization/client
        ```    	
    - Run the following command to install the required npm packages:
        ``` bash
        npm install
        ```    	

5. Add the application keys:
    - Rename the `.env.example` file in the project root directory to `.env`.
    - Copy the `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` values
      from the `01-authentication` example.
    - For `REACT_APP_AUTH0_AUDIENCE` we will see in the next steps 
      [Get the Auth0 Audience](#get-the-auth0-audience).

6. Install npm packages (Server):
    - Open your command line interface.
    - Navigate to the project root directory.\
      If you are following the step order
        ``` bash
        cd ../server
        ```    	
      Or if you are in the root of the repo
        ``` bash
        cd 02-authorization/server
        ```    	
    - Run the following command to install the required npm packages:
        ``` bash
        npm install
        ```    	

7. Add the application keys:
    - Rename the `.env.example` file in the project root directory to `.env`.
    - Copy the `REACT_APP_AUTH0_DOMAIN` value and place it after `AUTH0_DOMAIN`.
    - For `AUTH0_AUDIENCE` we will see in the next steps 
      [Get the Auth0 Audience](#get-the-auth0-audience).

### Get the Auth0 Audience

#### Create the API
  - Open the [APIs](https://manage.auth0.com/#/apis) section of the Auth0 Dashboard.
  - Click on the **Create API** button and fill outh the **"New API"**. Insert
    the *Name* that you prefer and fill the *Identifier* with something like
    `https://test.example.com` (the link doesn't need to be a valid website).
  - Click on the **Create** Button.

#### Update the env file
In both the client and server `.env` file, add the **Identifier** after the
`AUTH0_AUDIENCE` or `REACT_APP_AUTH0_AUDIENCE` variable. The Identifier should 
look something like `https://test.example.com`

### Set Up Role-Based Access Control (RBAC)
The access token present in the authorization header of a request must include
a `permission` claim that contains the `read:admin-messages` permission to
access the `GET /api/messages/admin` endpoint.\

#### Enable RBAC
  - Open the [APIs](https://manage.auth0.com/#/apis) section of the Auth0
    Dashboard and select your API registration.
  - Click on the **"Settings"** tab and locate the **"RBAC Settings"** section.
  - Switch on the **"Enable RBAC"** and **"Add Permissions in the Access
    Token"** options.

#### Create an API permission
In the same Auth0 API registration page, follow these steps:
  - Click on the **"Permissions"** tab and fill a field from the **"Add a
    Permission (Scope)"** section with the following information:
    - **Permission (Scope)**: `read:admin-messages`
    - **Description**: `Read admin messages`
  - Click the **+ Add** button and store the permission.

#### Create a Role with permissions

##### Create a role
  - Open the [Roles](https://manage.auth0.com/#/roles) section of the Auth0
    Dashboard.
  - Click on the **Create role** button and fill out the **"New Role"** form
    with the following values:
    - **Name:** `messages-admin`
    - **Description:** `Read admin messages`
  - Click on the **Create** button.

##### Add permissions to the role
  - Click on the **"Permissions"** tab of the roles page.
  - Click on the **"Add Permissions"** button.
  - Select your entry from the dropdown menu and click the **"Add
    Permissions"** button.
  - Select all the permissions available 
  - Finally, click on the **"Add Permissions"** button to finish up.

#### Create an admin user
  - Open the [Users](https://manage.auth0.com/#/users) section from the Auth0
    Dashboard.
  - Click on any of your existing users to give one of them the admin role.
  - On the user's page, click on the **"Roles"** tab and the click on the **"Assign Roles"** button.
  - Select the `messages-admin` role from the dropdown menu and click on the **Assign** button.


### Run the project
Run the server part:
``` bash
cd server
npm start
```

And run the client:

``` bash
cd client
npm start
```

Now you will be able to access to the website with this url
[localhost:4040](http://localhost:4040)


## Project Structure

The project is divided into two parts: the client and the server. 

### Client

The client files are structure as follows (under the `client/src` directory):
- **index.tsx**: The entry point of the application.
- **App.tsx**: The root component of the application that contains the user interface.
- **auth0-provider-with-navigate.tsx**: The component that wraps the application
  and provides the Auth0 context to the application.
- **components**
  - **authentication-guard.tsx**: The component that handles the authentication
    process and redirects the user to the login page if the user is not
    authenticated or to the requested page if the user is authenticated.
  - **code-snippet.tsx**: The component that displays the code snippet ui.
  - **page-layout.tsx**: The component that displays the page layout (navbar,
    page content, footer).
  - **page-loader.tsx**: The component that displays the page loader indicator.
  - **buttons**:
    - **login-button.tsx**: The component that displays the login button.
    - **logout-button.tsx**: The component that displays the logout button.
  - **navigation**:
    - **desktop**: Contains the navbar elements displayed on desktop.
    - **mobile**: Contains the navbar elements displayed on mobile.
  - **models**: Foldre that contains the interfaces used in the application.
  - **pages**: 
    - **admin-page.tsx**: Displays the admin messages page, accessible only by admin users. 
    - **callback-page.tsx**: Handles the callback route, displays the error message if the authentication fails.
    - **home-page.tsx**: Displays the home page, visible by all users, even if not authenticated.
    - **not-fonud-page.tsx**: Displays the not found page, visible by all users, even if not authenticated.
    - **profile-page.tsx**: Displays the profile page, accessible only by authenticated users.
    - **protected-page.tsx**: Displays the protected page, accessible only by authenticated users and don't require admin permissions.
    - **public-page.tsx**: Displays the public page, visible by all users, even if not authenticated.
  - **services**:
    - **external-api.service.ts**: Handles the external api calls.
    - **message.service.ts**: Service that handles the messages api calls.

So, to start the application, you need to run the `index.tsx` file. This file
contains the `ReactDOM.render()` method that renders the `App.tsx` component.
The `App.tsx` component contains the user interface of the application. 

### Server

The server files are structure as follows (under the `server/src` directory):
- **index.ts**: The entry point of the application, configures the server and
  starts it.
- **messages**
  - **message.model.ts**: The message model.
  - **messages.permissions.ts**: The permissions required to access the messages
    endpoints.
  - **messages.router.ts**: The messages router that handles the messages
    endpoints.
  - **messages.service.ts**: The messages service that handles the messages
    requests.
- **middleware**:
  - **auth0.middleware.ts**: The middleware that handles the authentication
    process, checks the access token for validity.
  - **error.middleware.ts**: The middleware that handles the errors.
  - **not-found.middleware.ts**: The middleware that handles the not found
    routes.

To start the server, you need to run the `index.ts` file. This file contains the
server configuration and starts the server. The server is configured to listen
on port `6060` by default.
