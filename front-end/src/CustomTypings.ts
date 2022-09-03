export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isAdmin: boolean;
  firstTime: boolean;
}

export interface Note {
  id: number;
  userId: number;
  noteText: string;
  services: string;
  pastColor: string;
  chemical: string;
  currColor: string;
  bookDays: string;
}
