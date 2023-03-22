import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Settlers of Catan',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME',
    },
    {
      // _id: '2',
      name: 'Settlers of Catan',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME',
    },
    {
      // _id: '3',
      name: 'Settlers of Catan',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME',
    },
    {
      // _id: '4',
      name: 'Settlers of Catan',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME',
    },
  ],
};
export default data;