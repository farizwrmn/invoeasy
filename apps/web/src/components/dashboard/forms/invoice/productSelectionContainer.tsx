import React, { ChangeEvent } from 'react';
import SelectProduct from './selectProduct';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

type ProductSelectionContainerProps = {
  products: { id: string; name: string; price: number }[];
  onProductChange: (
    products: { itemId: string; quantity: number; price: number }[],
  ) => void;
};

const ProductSelectionContainer: React.FC<ProductSelectionContainerProps> = ({
  products,
  onProductChange,
}) => {
  const [selectedProducts, setSelectedProducts] = React.useState([
    { itemId: '', quantity: 1, price: 0 },
  ]);

  const handleChange =
    (index: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const updatedProducts = [...selectedProducts];
      const selectedProduct = products.find(
        (product) => product.id === event.target.value,
      );

      if (selectedProduct) {
        updatedProducts[index] = {
          itemId: selectedProduct.id,
          quantity: updatedProducts[index].quantity,
          price: selectedProduct.price,
        };
        setSelectedProducts(updatedProducts);
        onProductChange(updatedProducts); // Pass the entire array of updated products
      }
    };

  const handleChangeQuantity =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const updatedProducts = [...selectedProducts];
      updatedProducts[index].quantity = Number(event.target.value);
      setSelectedProducts(updatedProducts);
      onProductChange(updatedProducts); // Pass the entire array of updated products
    };

  const addProductSelection = () => {
    setSelectedProducts([
      ...selectedProducts,
      { itemId: '', quantity: 1, price: 0 },
    ]);
  };

  const removeProductSelection = (index: number) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
    onProductChange(updatedProducts); // Pass the entire array of updated products
  };

  return (
    <div>
      {selectedProducts.map((product, index) => (
        <div key={index} className="flex items-center gap-4">
          <SelectProduct
            formDataItemId={product.itemId}
            handleChange={handleChange(index)}
            products={products}
            formDataQuantity={product.quantity}
            handleChangeQuantity={handleChangeQuantity(index)}
          />
          {index > 0 && (
            <button
              onClick={() => removeProductSelection(index)}
              className="text-red-500 hover:text-red-700 mt-8"
            >
              <FaTrashAlt />
            </button>
          )}
        </div>
      ))}
      <div className="flex items-center justify-start mt-2 gap-4">
        <button
          onClick={addProductSelection}
          className="flex items-center gap-2 bg-green-800 px-2 p-1 rounded-full"
        >
          <FaPlusCircle color="white" />
          <p className="text-white text-sm">Add multiple products</p>
        </button>
      </div>
    </div>
  );
};

export default ProductSelectionContainer;