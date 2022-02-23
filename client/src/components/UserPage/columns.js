export const COLUMNS = [
    {
        Header: '',
        accessor: 'PokemonImage',
        // Filter: ColumnFilter,
        disableFilters: true,
        Cell: tableProps => (
            <img
                className="pokeimg"
                src={tableProps.row.original.PokemonImage}
                width={90}
                alt='Player'
            />
        ),
        sticky: 'left'
    },
    {
        Header: '',
        accessor: 'pokemon',
        sticky: 'left'
    }
]