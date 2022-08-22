// function add() {
//     sout = sout + <tr>;
//     for (i = 0; i < array.length; i++) {
//         array.push(input);
//     }
//     sout = sout + input + '</tr>' ;
// }

let products = new Array ();

function addProduct() {
        let input = document.getElementById('inputNewProduct').value;
        products.push(input);
        display();
}

function display() {
    let sout = '<tr><th style="text-align: left;">Product name</th></tr>';
    for (let i=0; i < products.length; i++) {
        sout = sout + '<tr>';
        sout = sout + '<td>' + products[i] + '</td>';
        sout = sout + '<td>' + '<input id="btnEdit" type="button" value="Edit">' + '</td>';
        sout = sout + '<td>' + '<input id="btnDelete" type="button" value="Delete">' + '</td>';
        sout = sout + '</tr>';
    }
    document.getElementById('productAmount').innerHTML = products.length;
    document.getElementById('allProducts').innerHTML = sout;
}











