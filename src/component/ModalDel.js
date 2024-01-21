import { Button, Modal,Form } from "react-bootstrap";
import { Trash, XLg } from "react-bootstrap-icons";

const ModalDel = ({close,title,todo,idTodo}) => {

  // Process del

  const delProcess = () => {
    fetch(`http://localhost:3001/todo/${idTodo}`,{
      method : 'DELETE'
    })
    .then(result => {console.log('ok')})
    close()
  }
  
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
          </Form.Group>
          <Form.Group className="mt-3">
            <p className="lead text-center fs-6">Apakah anda ingin menghapus tigas ini ? </p>
            <p className="lead text-center fs-5">{todo} | {idTodo}</p>
          </Form.Group>
        </Form>
      </Modal.Body>
      {/* Footer & Button */}
      <Modal.Footer>
      <Button variant="danger" onClick={delProcess}>
          <Trash /> Hapus
        </Button>
        <Button variant="warning" onClick={close}>
          <XLg /> Tutup
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalDel;
