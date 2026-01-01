export const usersState = {
    userLogged: false,
    users: [{
        id: 1,
        name: "Juan",
        lastname: "Perez",
        email: "juan@gmail.com",
        phone: "123456789",
        password: "123",
        age: 25,
        shoppingCar: [
            {
                name: "Producto 1",
                price: 100
            },
            {
                name: "Producto 2",
                price: 200
            }
        ]
    },
    {
        id: 2,
        name: "Maria",
        lastname: "Garcia",
        email: "maria@gmail.com",
        phone: "123456789",
        password: "1234",
        age: 30,
        shoppingCar: [
            {
                name: "Producto 1",
                price: 100
            },
            {
                name: "Producto 2",
                price: 200
            }
        ]
    }]
}