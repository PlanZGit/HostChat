import React, { useContext, useRef, useState } from "react";
import "./Lobby.css";
import { UserContext } from "../User/User";
import ReactModal from "react-modal";
import { TbSettings2 } from "react-icons/tb";

ReactModal.setAppElement("#root");

const Lobby = () => {
  const { user, setUser } = useContext(UserContext);
  const [modal, setModal] = useState(true);
  const idRef = useRef(0);
  const nameRef = useRef(0);

  const handleJoin = (e) => {
    e.preventDefault();
    console.log("join");
    setUserState();
  };

  const handleHost = (e) => {
    e.preventDefault();
    console.log("host");
    setUserState();
  };

  const setUserState = () => {
    setUser({
      ...user,
      username: nameRef.current.value,
      room: idRef.current.value,
    });
  };

  return (
    <div className="Lobby">
      <ReactModal
        isOpen={true}
        onRequestClose={() => setModal(!modal)}
        className={modal ? "isOpen2" : "isClose2"}
        overlayClassName={modal ? "overlayIsOpen" : "overlayIsClose"}>
        <div className={modal ? "modal-container" : "modal-container-hide"}>
          <h1>Host Chat</h1>
          <form>
            <label htmlFor="search">Search ID</label>
            <input id="search" placeholder="ID" ref={idRef} />
            <label htmlFor="username">Create username </label>
            <input id="username" placeholder="username" ref={nameRef} />

            <div className="button-container">
              <button onClick={(e) => handleJoin(e)}>Join</button>
              <button onClick={(e) => handleHost(e)}>Host</button>
            </div>
          </form>
        </div>
        <TbSettings2 onClick={() => setModal(!modal)} />
      </ReactModal>
    </div>
  );
};

export default Lobby;
