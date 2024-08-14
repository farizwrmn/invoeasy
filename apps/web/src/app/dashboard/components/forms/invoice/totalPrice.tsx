import React from 'react';

type TotalPrice = {
  formDataTax: number;
  formDataItemId: string;
  handleChangeTax: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formDataQuantity: number;
  products: { id: string; name: string; price: number }[];
};

const TotalPrice = ({
  formDataTax,
  handleChangeTax,
  formDataItemId,
  formDataQuantity,
  products,
}: TotalPrice) => {
  const calculateSummary = () => {
    const selectedProduct = products.find(
      (product) => product.id === formDataItemId,
    );
    if (!selectedProduct) return { itemPrice: 0, taxAmount: 0, totalPrice: 0 };

    const itemPrice = selectedProduct.price * formDataQuantity;
    const taxAmount = (formDataTax / 100) * itemPrice;
    const totalPrice = itemPrice + taxAmount;

    return { itemPrice, taxAmount, totalPrice };
  };

  const summary = calculateSummary();
  return (
    <div className="flex-1 flex flex-col justify-end">
      <div className="flex justify-end">
        <div>
          <div className="flex justify-end">
            <div className="form-control">
              <label
                htmlFor="tax"
                className="block text-sm font-medium text-gray-50 text-center"
              >
                Tax:
              </label>
              <div className="flex items-center">
                <input
                  name="tax"
                  type="number"
                  placeholder="Tax"
                  min="1"
                  value={formDataTax}
                  onChange={handleChangeTax}
                  className="mt-1 block w-12 rounded-md border-gray-300 text-md text-center text-black"
                  required
                />
                <span className="ml-2 text-white">%</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-end">
            <p className="text-md text-gray-50 border-b-2 mb-5">
              <strong>Tax Amount ({formDataTax}%):</strong>{' '}
              {'Rp. ' +
                summary.taxAmount.toLocaleString('id-ID', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </p>
            <div className="flex items-center">
              <label
                htmlFor="totalPrice"
                className="block text-sm font-medium text-gray-50 mr-3"
              >
                Total Price:
              </label>
              <p
                className="block w-full cursor-default rounded-md border-gray-300 shadow-sm p-2 text-white font-bold text-xl bg-slate-600"
                style={{ width: '200px' }}
              >
                {'Rp. ' +
                  summary.totalPrice.toLocaleString('id-ID', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
