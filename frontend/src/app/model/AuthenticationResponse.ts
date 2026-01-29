export interface AuthenticationResponse {
    token: string;
    type: string;
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string; // Adjust the type based on how the server sends the role
    jwtToken: string; // Add the jwtToken property

  }
   