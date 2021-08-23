export enum CheckBoxType {
  Radio = 'Radio',
  Square = 'Square',
}

export enum ProductType {
  mug = 'mug',
  shirt = 'shirt',
}

export interface IProduct {
  price: string;
  name: string;
  description: string;
  manufacturer: string;
  itemType: ProductType;
  tags: string[];
  added: number;
  slug: string;
}

export interface ICompany {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

export enum SortBy {
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
  NEW_TO_OLD = 'NEW_TO_OLD',
  OLD_TO_NEW = 'OLD_TO_NEW',
}

export interface IOrder extends IProduct {
  count?: number;
}

export interface IInitialState {
  orderReducer: null | any;
  tagReducer: null | any;
  productReducer: null | any;
  companyReducer: null | any;
  brandReducer: null | any;
  sortReducer: null | any;
  pageReducer: null | any;
  itemTypeReducer: null | any;
}

export enum Tags {
  All = 'All',
  Trees = 'Trees',
  Beach = 'Beach',
  Ocean = 'Ocean',
  Water = 'Water',
  Animal = 'Animal',
  Bear = 'Bear',
  Road = 'Road',
  Rocks = 'Rocks',
  Sunset = 'Sunset',
  Rust = 'Rust',
  Old = 'Old',
  Car = 'Car',
  Coffee = 'Coffee',
  Fog = 'Fog',
  People = 'People',
  Dock = 'Dock',
  Person = 'Person',
  Hills = 'Hills',
  Animals = 'Animals',
  Sheep = 'Sheep',
  Lake = 'Lake',
  Building = 'Building',
  Metal = 'Metal',
  Woman = 'Woman',
}

export enum ItemTypes {
  Shirt = 'shirt',
  Mug = 'mug',
}
