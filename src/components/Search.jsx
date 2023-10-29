const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Buscar Tarefa:</h2>
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Digite a tarefa"
            />
        </div>
    );
};

export default Search;