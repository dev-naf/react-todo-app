import { Modal } from "react-bootstrap";
import ModalForm from "./ModalForm";
import ModalDel from "./ModalDel";

const ModalInput = ({idTodo, date,show,close,title,idForm,color="bg-success text-light", todo}) => {
    return ( 
        <div>
        <Modal show={show}  onHide={close}>
            <Modal.Header closeButton className={color}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {/* <ModalForm close={close} id={idForm}/> */}
            {idForm == 1 ? <ModalForm close={close} id={idForm} date={date}/> : ''}
            {idForm == 2 ? <ModalForm close={close} id={idForm} Todo={todo} date={date} idTodo={idTodo} /> : ''}
            {idForm == 3 ? <ModalDel close={close} title={title} todo={todo} idTodo={idTodo}/> : ''}
            
        </Modal>
        </div>

    );
}
export default ModalInput;