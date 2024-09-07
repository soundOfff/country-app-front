"use client";

import Link from "next/link";

export default function Table({ countries, title, description }) {
  return (
    <div className="px-4 py-4 mb-8 sm:px-6 lg:px-12 bg-gray-50 w-full border">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        {countries && countries.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Country Code
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Country Name
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {countries.map((country, index) => (
                <tr key={index}>
                  <td className="w-full max-w-0 py-4 px-4 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none">
                    {country.countryCode}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {country.name ?? country.officialName}
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-medium">
                    <Link
                      href={`/countries/${country.countryCode}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Go to details
                      <span className="sr-only">, {country.name}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500">No countries found</div>
        )}
      </div>
    </div>
  );
}
