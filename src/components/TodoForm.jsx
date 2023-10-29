import {useState} from "react";

// eslint-disable-next-line react/prop-types
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value, category);
        if (!value || !category) return; {
            addTodo (value, category);
            setValue("");
            setCategory("");
        }
    }

    return <div className="todo-form">
        <h2>Adicionar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite a tarefa"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            />
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button className="button">Criar Tarefa</button>
        </form>
    </div>;
};

export default TodoForm;