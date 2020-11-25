const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            margherita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const nomeCliente = order.order.delivery.deliveryPerson;
    const nomeParaEntrega = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const numero =order.address.number; 
    const apartamento = order.address.apartment;
    console.log(`Olá ${nomeCliente}, entrega para: ${nomeParaEntrega},
    Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}\n`);
}

customerInfo(order);

const orderModifier = (order) => {
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.payment.total = '50';
    const nameClient = order.order.delivery.deliveryPerson;
    const value = order.payment.total;
    console.log(`Olá ${nameClient}, o total do seu pedido de muzzarella,
     calabresa e Coca-Cola Zero é R$ ${value},00`);
}

orderModifier(order);