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
      description: 'DOPE GAME1',
    },
    {
      // _id: '2',
      name: 'Settlers of Catan2',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME2',
    },
    {
      // _id: '3',
      name: 'Settlers of Catan3',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME3',
    },
    {
      // _id: '4',
      name: 'Settlers of Catan4',
      image: 'https://via.placeholder.com/200x200?text=Settlers+of+Catan', // 679px × 829px
      price: 49.99,
      rating: 4.5,
      numReviews: 10,
      description: 'DOPE GAME4',
    },
  ],
};
export default data;