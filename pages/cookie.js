
typeof {"count":"12","name":"Product-3"}


[{"count":1, "name":"Product-2"}]

[{"count":1, "name":"Product-2"}, {"count":1, "name":"Product-1"}]


onClick={() => {
  cookie.set(
    'productsInCart',
    turnObjectIntoString({
      coun: count,
      name: foundProduct.name
    })
  );
  location.reload();
}}
>
Add to Cart
</button>