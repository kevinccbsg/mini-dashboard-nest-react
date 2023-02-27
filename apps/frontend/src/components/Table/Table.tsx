import React, { ReactNode } from 'react';
import { useTable, Column } from 'react-table';
import { TableStyle, Thead, Th, Td, Tr, Container } from './Table.styled';

interface TableProps {
  items: {
    [key: string]: React.ReactNode | string;
  }[]
  columnHeaders: readonly Column<{ [key: string]: ReactNode; }>[]
}

const Table = ({ items, columnHeaders }: TableProps) => {
  const data = React.useMemo(
    () => items,
    [items]
  );

  const columns = React.useMemo<readonly Column<{ [key: string]: ReactNode; }>[]>(
    () => columnHeaders,
    [columnHeaders]
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