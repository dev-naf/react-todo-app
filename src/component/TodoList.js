import DataList from "./DataList";
import Slider from "./Slider";

const TodoList = ({title,todo,status}) => {
    return ( 
        <div className="mt-4 mb-0 ">
        {/* Slider component */}
        <Slider title={title}/>
        {/* Komponen Checlist */}
        <div className="TodoList ">
            {todo.map((data) => (
                data.STATUS == status ? <DataList key={data._id} id={data._id} todo={data.TODO} status={data.STATUS}/> : ''
                
            ))}
        </div>
        
    </div> );
}

export default TodoList;