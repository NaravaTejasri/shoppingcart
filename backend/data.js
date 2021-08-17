import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Tejasri',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'kiran',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
        {
            name: 'divija',
            email: 'user1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }, 
    ],

    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'shirt',
            image: '/images/girl.jpeg',
            price: 120,
            countInStock: 20,
            brand:'Nike',
            rating: 4.5,
            numReviews: 20,
            description: 'High quality product'

        },
        {
            name: 'Only  Shirt',
            category: 'shirt',
            image: '/images/shirt1.jpg',
            price: 150,
            countInStock: 30,
            brand:'only',
            rating: 3.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
            name: 'Lee cooper Shirt',
            category: 'shirt',
            image: '/images/shirt2.jpg',
            price: 110,
            countInStock: 0,
            brand:'Lee cooper',
            rating: 4.8,
            numReviews: 15,
            description: 'High quality product'

        },
        {
            name: 'Harpa Shirt',
            category: 'shirt',
            image: '/images/shirt3.jpg',
            price: 100,
            countInStock: 10,
            brand:'harpa',
            rating: 4.5,
            numReviews: 30,
            description: 'High quality product'

        },
        {
            name: 'Allen solly Shirt',
            category: 'shirt',
            image: '/images/shirt4.jpg',
            price: 150,
            countInStock: 10,
            brand:'Allen',
            rating: 2.5,
            numReviews: 5,
            description: 'High quality product'

        },
        {
            name: 'pepe jeans',
            category: 'shirt',
            image: '/images/shirt5.jpg',
            price: 160,
            countInStock: 15,
            brand:'Pepe',
            rating: 1.5,
            numReviews: 3,
            description: 'High quality product'

        },  
    ]
};

export default data;