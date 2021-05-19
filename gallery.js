let products = [
    {
        'id': 0,
        'name': 'pure leather',
        'description': 'BY PUMA',
        'price': 109.15,
        'pic': "1.jpg",
        'qty_in_stock':50
    },
    {
        'id': 1,
        'name': 'Brown formal',
        'description': 'BY HRX',
        'price': 82.99,
        'pic': '2.jpg',
        'qty_in_stock': 150
    },
    {
        'id': 2,
        'name': 'classic shoe',
        'description': 'BY BATA',
        'price': 138.99,
        'pic': '3.jpg',
        'qty_in_stock': 644
    },
    {
        'id': 3,
        'name': 'Woody shoe',
        'description': 'BY ADIDAS',
        'price': 129.99,
        'pic': '4.jpg',
        'qty_in_stock': 140
    },
    {
        'id': 4,
        'name': 'semi-formal ',
        'description': 'BY FILA ',
        'price': 159.99,
        'pic': '5.jpg',
        'qty_in_stock': 45
    },
    {
        'id': 5,
        'name': 'sport shoe',
        'description': 'BY YONEX',
        'price': 94.99,
        'pic': '6.jpg',
        'qty_in_stock': 121
    },
    {
        'id': 6,
        'name': 'Floral shoe Heels',
        'description': 'BY HRX',
        'price': 80.99,
        'pic': 'w1.jpg',
        'qty_in_stock':50
    },
    {
        'id': 7,
        'name': 'Solid shoe heels',
        'description': 'BY BATA',
        'price': 99.99,
        'pic': 'w2.jpg',
        'qty_in_stock': 150
    },
    {
        'id': 8,
        'name': 'Festive wear',
        'description': 'BY REEBOK',
        'price': 150.99,
        'pic': 'w3.jpg',
        'qty_in_stock': 644
    },
    {
        'id': 9,
        'name': 'Party wear',
        'description': 'BY NIKE',
        'price': 129.99,
        'pic': 'w4.jpg',
        'qty_in_stock': 140
    },
    {
        'id': 10,
        'name': 'Formal girls ',
        'description': 'BY PUMA',
        'price': 82.99,
        'pic': 'w5.jpg',
        'qty_in_stock': 45
    },
    {
        'id': 11,
        'name': 'Girls sports',
        'description': 'BY FILA',
        'price': 69.99,
        'pic': 'w6.jpg',
        'qty_in_stock': 121
    }
 ];
for (i=0; i<products.length ; i++ )
{
if(products[i]['qty_in_stock'] > 0)
{
    document.getElementById("main").innerHTML += 
          '<div class="product"><img src="images/'+ products[i]['pic'] +'" alt="'+products[i]['name']+'"><p class="name">'+products[i]['name']+'</p><p class="description">'+ products[i]['description'] +'</p><p class="price"> $'+products[i]['price']+'</p></div>';

}
}
