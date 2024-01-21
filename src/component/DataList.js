import { useEffect, useState } from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import ModalInput from "./ModalInput";

const DataList = ({ todo, id, status }) => {
  const [check, setCheck] = useState();
  const [idForm, setIdForm] = useState(0);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [tododel, setTododel] = useState("");
  const [modaldate, setModaldate] = useState("");

  // [DATE GENERATE]
  const temp = new Date();
  const date = `${temp.getFullYear()}-${
    temp.getMonth() + 1
  }-${temp.getDate()} `;


//   [TEST]

  useEffect(() => {
    if(status == 1){
        setCheck(true)
    }else{
        setCheck(false)
    }
  },[check])

  //  [CHECKBOX FUNC.]
  const checkboxClick = (e) => {
    // [Melakukan Cek]
    if (!check) {
      console.log("ini belum di cek");
      fetch(`http://localhost:3001/todo/check/${id}`).then((result) =>
        console.log("OK")
      );
      setCheck(true);
    }

    // [Membatalkan Cek]
    if (check) {
      console.log("ini sudah di cek");
      fetch(`http://localhost:3001/todo/uncheck/${id}`).then((result) =>
        console.log("OK")
      );
      setCheck(false);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModalEdit = (id) => {
    setShowModal(true);
    setIdForm(2);
    setTitle("Update Data Anda");
    setColor("bg-secondary text-light");
    setModaldate(date);
  };

  const handleShowModalDel = (id) => {
    setShowModal(true);
    setIdForm(3);
    setTitle("Hapus Data Anda");
    setColor("bg-danger text-light");
    setTododel(todo);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="DataList" id={id}>
      <div className="d-flex align-items-center justify-content-between ">
        {status == "1" ? (
          <input
            type="checkbox"
            className="form-check-input p-2"
            checked={check}
            onChange={(e) => checkboxClick(e)}
          />
        ) : (
          <input
            type="checkbox"
            className="form-check-input p-2"
            checked={check}
            onChange={(e) => checkboxClick(e)}
          />
        )}
        {status == "1" ? (
          <p className="m-2 fw-light text-decoration-line-through">{todo}</p>
        ) : (
          <p className="m-2 fw-light">
            {todo}
          </p>
        )}
        <div
          className="btn-group "
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            onClick={handleShowModalEdit}
            className="btn btn-sm btn-warning"
          >
            <PencilSquare />
          </button>
          <button
            type="button"
            onClick={handleShowModalDel}
            className="btn btn-sm btn-danger"
          >
            <Trash />
          </button>
        </div>
      </div>
      <ModalInput
        date={modaldate}
        show={showModal}
        close={handleCloseModal}
        title={title}
        idForm={idForm}
        idTodo={id}
        color={color}
        todo={tododel}
      />
    </div>
  );
};

export default DataList;
