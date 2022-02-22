export const COLUMNS = [
    {

        Header: '',
        accessor: 'PokemonImage',
        // Filter: ColumnFilter,
        disableFilters: true,
        Cell: tableProps => (
            <img
                src={tableProps.row.original.PokemonImage}
                width={60}
                alt='Player'
            />
        ),
        sticky: 'left'
    },
    {
        Header: 'Pokemon',
        accessor: 'pokemon',
        sticky: 'left'
    },

    {
        Header: 'Attack',
        accessor: 'attack'
    },
    {
        Header: 'Defence',
        accessor: 'defence'
    },
    {
        Header: 'HP',
        accessor: 'hp'
    },
    {
        Header: 'Max CP',
        accessor: 'cp'
    },


] 
