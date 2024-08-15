import { TransitionLink } from '@/components/utils/transitionLink';
import { ChangeEvent, useState } from 'react';

type Customer = {
  id: string;
  name: string;
  type: string;
};

type Props = {
  customers: Customer[];
  onCustomerSelect: (customerId: string) => void;
};

const CustomerSearch = ({ customers, onCustomerSelect }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(customers);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const results = customers.filter((customer) =>
        customer.name.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredCustomers(results);
    } else {
      setFilteredCustomers(customers);
    }
  };

  const handleSelect = (customerId: string, customerName: string) => {
    // Clear the search term and filtered results
    setSearchTerm(customerName);
    setFilteredCustomers([]);

    // Call the callback function to update the selected customer ID
    onCustomerSelect(customerId);
  };

  return (
    <div className="flex-1 border-gray-300">
      <label
        htmlFor="customerId"
        className="block text-sm font-medium text-gray-50"
      >
        Search Customer:
      </label>
      <input
        id="customerId"
        name="customerId"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="mt-1 p-2 block w-4/6 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md text-md"
        style={{ height: '30px' }}
        placeholder="Type to search..."
      />
      {filteredCustomers.length > 0 && (
        <ul className="mt-1 bg-white rounded-md shadow-lg max-h-40 overflow-auto w-4/6">
          {filteredCustomers.map((customer) => (
            <li
              key={customer.id}
              onClick={() => handleSelect(customer.id, customer.name)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              {customer.name} - {customer.type}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center justify-start">
        <TransitionLink className="" href="/dashboard/customers/create">
          <button className="text-white p-1 mt-2 text-sm bg-blue-500 rounded-md">
            Create new Customer
          </button>
        </TransitionLink>
      </div>
    </div>
  );
};

export default CustomerSearch;