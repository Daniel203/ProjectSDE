// Define the permissions for the messages module
// "read:admin-messages" is the name that we have given to the permission through the Auth0 dashboard
export enum AdminMessagesPermissions {
  Read = "read:admin-messages",  // Allow the admin user to access messages visible only to admins
}
