    // Variables
    const baseDeDatos = [
        {
            id: 1,
            name: 'botella',
            price: 500
        },
        {
            id: 2,
            name: 'licuadora',
            price: 1200
        },
        {
            id: 3,
            name: 'botiquin',
            price: 300
        },
        {
            id: 4,
            name: 'perfume',
            price: 600
        }

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;