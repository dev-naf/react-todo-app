
import { PlusLg } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalInput from "./ModalInput";

const Header = ({title,subtitle}) => {
    // Mencoba komponen modal, didalm header
    const [showModal,setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    // tanggal | Tahun-Bulan-Tanggal
    const temp = new Date();
    const date = `${temp.getFullYear()}-${temp.getMonth()+1}-${temp.getDate()} `

    return ( 
        <div className="Header">
                {/* Props */}
                <div className="d-flex justify-content-between">
                    <h1 className="fs-3 p-0 m-0">{title}</h1>
                    <Button variant="primary" onClick={handleShowModal}><PlusLg/> Tambah</Button>
                </div>
                <hr className="border-1"/> 
                <h2 className="fw-normal fs-5 p-0 m-0">{subtitle}</h2>
            
                <ModalInput show={showModal} close={handleCloseModal} title={"Tambahkan Pekerjaan Baru"} idForm={1} date={date}/>
        </div>
     );
}
 

export default Header;