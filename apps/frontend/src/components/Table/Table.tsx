import React, { ReactNode } from 'react';
import { useTable, Column, Row } from 'react-table';
import { TableStyle, Thead, Th, Td, Tr, Container } from './Table.styled';

interface TableProps {
  id: string;
  items: {
    [key: string]: React.ReactNode | string;
  }[];
  columnHeaders: readonly Column<{ [key: string]: ReactNode; }>[];
  rowClick: (row: Row<{
    [key: string]: React.ReactNode;
  }>) => void;
}

const Table = ({ id, items, columnHeaders, rowClick }: TableProps) => {
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
              <Tr {...row.getRowProps()} data-cy={`${id}-table-row`}>
                {row.cells.map((cell) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      onClick={()=> rowClick(row)}
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