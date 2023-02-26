export interface Course {
  _id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: string;
}

export class User {
  // we are using any here because in mongo _id is a ObjectID type
  // but in our DB.json that's a uuid and to fix a TS error with the tests
  // we have to use any here
  _id?: any;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  inscriptionDate: string;
  courses: Course[]
}

export const userDetail: User = {
  _id: '1e24db5d-f8ed-4f71-885a-1b9a77530e9e',
  isOnline: false,
  name: 'Maurine',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg',
  lastName: 'Harber',
  username: 'Clementine.Boyle',
  email: 'Dovie_Howell79@gmail.com',
  phone: '+34 6782 828 121',
  inscriptionDate: '02/06/2022',
  courses: [],
};

export const newUserRequest = {
  isOnline: false,
  name: 'Maurine',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg',
  lastName: 'Harber',
  username: 'Clementine.Boyle',
  email: 'Dovie_Howell79@gmail.com',
  phone: '+34 6782 828 121',
  inscriptionDate: '02/06/2022',
};
