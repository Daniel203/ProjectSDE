# Auth0 Authentication - React SPA

This repository contains a React application that demonstrates how to implement authentication using Auth0. The application showcases the authentication flow, including user login and session management.

## Getting Started

To get started with this example, follow the steps below: \
Skip to the step 4  if you have already created an application and have already changed the URLs.
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

4. Install npm packages:

   - Open your command line interface.
   - Navigate to the project root directory.

     ``` bash
     cd 01-autentication
     ```    	

   - Run the following command to install the required npm packages:

     ```bash
     npm install
     ```    	
     
5. Add the application keys:

   - Rename the `.env.example` file in the project root directory to `.env`.
   - Open the `.env` file and insert the *Domain* after `REACT_APP_AUTH0_DOMAIN` and *Client ID* after`REACT_APP_AUTH0_CLIENT_ID`.
   - If you can't find these values, follow the guide [Findind the Auth0 Application Keys](#finding-the-auth0-application-keys)

6. Run the project:

   - After the npm packages have finished installing, run the following command to start the development server:

     ``` bash
     npm start
     ```

   - The application will be running at [http://localhost:4040](http://localhost:4040). Open this URL in your browser to view the application.

   - Any changes you make to the code will automatically trigger a reload of the application in the browser. Additionally, any lint errors will be displayed in the console.

## Finding the Auth0 Application Keys

To find the "Domain" and "Client ID" values for your Auth0 application:

1. Sign in to your Auth0 Dashboard.
2. Navigate to the "Applications" section.
3. Select your application from the list.
4. In the application settings, you will find the "Domain" and "Client ID" values. Copy these values and add them after the "**=**"  in the `.env` file.
