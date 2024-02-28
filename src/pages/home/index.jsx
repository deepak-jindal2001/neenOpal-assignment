import { DATA } from "../../data";

import Card from "../../components/Card";
import { useState } from "react";
import Modal from "../../components/Modal";

const HomePage = () => {
  const [users, setUsers] = useState(DATA);
  const [openModal, setOpenModal] = useState(false);
  const [editUserDetail, setEditUserDetail] = useState({});
  let details;
  const deleteHandler = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  const likeHandler = (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return;
    }
    users[userIndex].liked = !users[userIndex].liked;
    setUsers([...users]);
  };
  const EditUserHandler = (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return;
    }
    setEditUserDetail(users[userIndex]);
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const onConfirmEdit = (id, updatedUser) => {
    console.log({ id, updatedUser });
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return;
    }
    users[userIndex] = updatedUser;
    setUsers([...users]);
  };
  const hideScrollBar = { height: "100vh", overflow: "hidden" };

  return (
    <div style={openModal ? hideScrollBar : {}}>
      {openModal && (
        <Modal
          onClose={closeModalHandler}
          userDetail={editUserDetail}
          onConfirm={onConfirmEdit}
        />
      )}
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {users.map((user, index) => (
          <Card
            key={index}
            userDetail={user}
            onDelete={deleteHandler}
            onlike={likeHandler}
            onEditUser={EditUserHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
