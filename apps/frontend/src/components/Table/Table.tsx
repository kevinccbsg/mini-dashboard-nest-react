import React from 'react';
import { useTable, Column } from 'react-table';
import { TableStyle, Thead, Th, Td, Tr, Container } from './Table.styled';

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        isOnline: 'Offline',
        name: 'Estudiante 01',
        username: 'Est01',
        email: 'estudiante01@gmail.com',
        phone: '603578200',
        icon: 'icon',
      },
      {
        isOnline: 'Offline',
        name: 'Estudiante 02',
        username: 'Est01',
        email: 'estudiante02@gmail.com',
        phone: '603578200',
        icon: 'icon',
      },
      {
        isOnline: 'Offline',
        name: 'Estudiante 03',
        username: 'Est01',
        email: 'estudiante03@gmail.com',
        phone: '603578200',
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
        Header: 'Username',
        accessor: 'username',
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
    <Container>
      <TableStyle {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </tr>
          ))}
        </Thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </tbody>
      </TableStyle>
    </Container>
  );
}

export default Table;