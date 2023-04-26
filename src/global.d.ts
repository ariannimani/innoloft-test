export interface TrlProps {
  id: number;
  name: string;
  description: string;
}

export interface TrlData {
  isLoading: boolean;
  error: Error | null;
  data: TrlProps[] | null;
}

export interface CoordinatesProps {
  lat: string;
  lng: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: Type;
  categories: Category[];
  implementationEffortText: any;
  investmentEffort: string;
  trl: Trl;
  video: string;
  user: User;
  company: Company;
  businessModels: BusinessModel[];
}

export interface Type {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Trl {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
}

export interface Company {
  name: string;
  logo: string;
  address: Address;
}

export interface Address {
  country: Country;
  city: City;
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
}

export interface Country {
  name: string;
}

export interface City {
  name: string;
}

export interface BusinessModel {
  id: number;
  name: string;
}
