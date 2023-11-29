// un tableau pour stocker les produits dans le panier
let cart = []; 

function addToCart(productIndex) {
  // fonction appelée lorsque le bouton acheter est cliqué
  
  // ajouter le produit au panier
  const product = {
    index: productIndex,
    price: getProductPrice(productIndex) 
  };
  cart.push(product);

  updateCartDisplay();
}
