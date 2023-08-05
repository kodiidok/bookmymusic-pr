import { Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

export default function Table() {
  return (
    <DataTable
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      horizontalSpacing="lg"
      // provide data
      records={[
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 2, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 3, name: 'Joe Biden', bornIn: 1942, party: 'Republic' },
        { id: 4, name: 'Joe Biden', bornIn: 1942, party: 'Republic' },
        { id: 5, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 6, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        // more records...
      ]}
      // define columns
      columns={[
        {
          accessor: 'id',
          // this column has a custom title
          title: '#',
          // right-align column
          textAlignment: 'right',
        },
        { accessor: 'name' },
        {
          accessor: 'party',
          // this column has custom cell data rendering
          render: ({ party }) => (
            <Text weight={700} color={party === 'Democratic' ? 'blue' : 'red'}>
              {party.slice(0, 3).toUpperCase()}
            </Text>
          ),
        },
        { accessor: 'bornIn' },
      ]}
      // execute this callback when a row is clicked
      onRowClick={({ name, party, bornIn }) =>
        alert(`You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`)
      }
    />
  );
}