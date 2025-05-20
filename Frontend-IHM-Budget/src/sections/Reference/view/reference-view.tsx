import { useState, useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { DashboardContent } from 'src/layouts/dashboard';
import useReference from 'src/hooks/use-reference';
import { LinearProgress, linearProgressClasses } from '@mui/material';
import { varAlpha } from 'src/theme/styles';
import { ReferenceType } from 'src/model/reference';
import { TableNoData } from '../table-no-data/table-no-data';
import { RefTableHead } from '../reference-table-head/reference-table-head';
import { TableEmptyRows } from '../table-empty-rows/table-empty-rows';
import { RefTableToolbar } from '../reference-table-toolbar/reference-table-toolbar';
import { emptyRows, applyFilter, getComparator, FormReferenceDataheader } from '../utils';

import { RefTableRow } from '../reference-table-row/reference-table-row';
import { DialogReference } from '../refrence-dialog/reference-dialog';

export function ReferenceView() {
  const table = useTable();
  const [filterSearch, setFilterSearch] = useState('');
  const {
    referencesData: { references: refData, loading },
    handleReferenceAdd,
  } = useReference();
  const handleAddReference = useCallback(
    (newData: ReferenceType) => {
      handleReferenceAdd(newData);
    },
    [handleReferenceAdd]
  );
  const dataFiltered: ReferenceType[] = applyFilter({
    inputData: refData,
    comparator: getComparator(table.order, table.orderBy),
    filterSearch,
  });
  useEffect(() => {}, [refData]);

  const notFound = !dataFiltered.length && !!filterSearch;

  return (
    <DashboardContent>
      {loading !== null && loading !== false ? (
        <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
          <LinearProgress
            sx={{
              width: 1,
              maxWidth: 320,
              bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
              color: (theme) => theme.vars.palette.text.secondaryChannel,
            }}
          />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              References
            </Typography>
            <DialogReference addData={handleAddReference} />
          </Box>
          <Card>
            <RefTableToolbar
              numSelected={table.selected.length}
              filterSearch={filterSearch}
              onFilter={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFilterSearch(event.target.value);
                table.onResetPage();
              }}
            />

            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <RefTableHead
                  order={table.order}
                  orderBy={table.orderBy}
                  rowCount={0}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) => {}}
                  headLabel={Object.keys(FormReferenceDataheader)
                    .map((key) => ({
                      id: key,
                      label: key,
                    }))
                    .slice(0, 6)}
                />
                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <RefTableRow
                        key={row.client}
                        row={row}
                        selected={table.selected.includes(row.client)}
                        onSelectRow={() => table.onSelectRow(row.client)}
                      />
                    ))}

                  <TableEmptyRows
                    height={68}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, 0)}
                  />

                  {notFound && <TableNoData searchQuery={filterSearch} />}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              component="div"
              page={table.page}
              count={0}
              rowsPerPage={table.rowsPerPage}
              onPageChange={table.onChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={table.onChangeRowsPerPage}
            />
          </Card>
        </>
      )}
    </DashboardContent>
  );
}

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
