import DataList from "./DataList";
import Slider from "./Slider";

const TodoList = ({title,todo,status}) => {
    const {data} = todo
    return ( 
        <div className="mt-4 mb-0 ">
        {/* Slider component */}
        <Slider title={title}/>
        {/* Komponen Checlist */}
        <div className="TodoList ">
            {data.map((todo) => (
                todo.STATUS == status ? <DataList key={todo.ID} id={todo.ID} todo={todo.TODO} status={todo.STATUS}/> : ''
                
            ))}
        </div>
        
    </div> );
}

export default TodoList;