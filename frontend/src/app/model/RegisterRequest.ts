export interface RegisterRequest {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    roles?: string; // Optional field (you can customize this based on your needs)
  }
  