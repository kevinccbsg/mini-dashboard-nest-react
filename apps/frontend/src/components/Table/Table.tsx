import React from 'react';
import { useTable, Column } from 'react-table';

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        isOnline: 'isOnline',
        the: 'the',
        name: 'name',
        email: 'email',
        phone: 'phone',
        icon: 'icon',
      },
      {
        isOnline: 'isOnline',
        the: 'the',
        name: 'name',
        email: 'email',
        phone: 'phone',
        icon: 'icon',
      },
      {
        isOnline: 'isOnline',
        the: 'the',
        name: 'name',
        email: 'email',
        phone: 'phone',
        icon: 'icon',
      },
    ],
    []
  );

  const columns = React.useMemo<Column<{ [key: string]: string}>[]>(
    () => [
      {
        Header: 'Conexión',
        accessor: 'isOnline', // accessor is the "key" in the data
      },
      {
        Header: 'Nombre y apellidos',
        accessor: 'name',
      },
      {
        Header: 'email',
        accessor: 'email',
      },
      {
        Header: 'phone',
        accessor: 'phone',
      },
      {
        Header: '',
        accessor: 'icon',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;