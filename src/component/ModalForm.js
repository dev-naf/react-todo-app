import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Pencil, Save2, XLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

// Modal Form untuk edit dan Menambah
const ModalForm = ({idTodo,  close, id, date, Todo} ) => {
  // state | Data dimasukan ke state
  const [todo, setTodo] = useState("");
  const [tanggal, setTanggal] = useState(date);

  // function | Simpan data
  const handleSubmitSave = () => {
    // Data -> Obj
    const data = {
      todo: todo,
      date: tanggal,
      check: 0,
    };
    console.log(data);
    // Simpan data
    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("OK");
      close();
    });
  };


  // function | Update data
  const handleSubmitUpdate = () => {
    // [Susun Data]
    const data = {
      todo: todo,
      date: tanggal,
      check: 0,
    };
    // [Proses pengiriman ]
    fetch(`http://localhost:3001/todo/${idTodo}`,{
      method : 'PUT',
      headers : {"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    close()
    
  }


  return (
    <>
      {/* Body */}
      <Modal.Body>
        <Form>
          <Form.Group>
            {/* Tugas Baru / Edit Tugas */}
            <Form.Label>{id == 1 ? "Edit Tugas" : "Tambah Tugas"}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan Tugas Anda"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tanggal Tugas</Form.Label>
            <Form.Control type="text" disabled value={tanggal} />
          </Form.Group>
        </Form>
      </Modal.Body>
      {/* Footer & Button */}
      <Modal.Footer>
        {/* [Temp] */}
        {id != 1 ? (
          <Button variant="warning" onClick={handleSubmitUpdate}>
            <Pencil /> Update
          </Button>
        ) : (
          <Button variant="success" onClick={handleSubmitSave}>
            <Save2 /> Simpan
          </Button>
        )}

        {/* [ASLI] */}
        {/* <Button variant="success" onClick={handleSubmitSave}>
          <Save2 /> Simpan
        </Button> */}
        <Button variant="danger" onClick={close}>
          <XLg /> Tutup
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalForm;
