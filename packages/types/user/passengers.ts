export type UserPassengers = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationalCode: string;
  birthdate: string;
  passportNumber: string | null;
  passportExpireDate: string;
  nationalityCode: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UserPassengersResponse = {
  items: UserPassengers[];
  page: number;
  pageSize: number;
  total: number;
};

export type UserPassengerQueries = {
  q?: string;
  firstName?: string;
  lastName?: string;
  gender?: "male" | "female";
  nationalCode?: string;
  passportNumber?: string;
  nationalityCode?: string;
  birthdateFrom?: string;
  birthdateTo?: string;
  page: number;
  pageSize: number;
  sortBy: "createdAt" | "updatedAt" | "firstName" | "lastName" | "birthdate";
  sortOrder: "asc" | "desc";
};
