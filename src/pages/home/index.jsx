import { DATA } from "../../data";

import Card from "../../components/card";
import { useState } from "react";
import Modal from "../../components/modal";

import classes from "./styles.module.css";

const HomePage = () => {
  const [users, setUsers] = useState(DATA);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const findUserIndex = (userId) => {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return -1;
    }
    return userIndex;
  };

  const likeHandler = (userId) => {
    const userIndex = findUserIndex(userId);
    if (userIndex !== -1) {
      users[userIndex].liked = !users[userIndex].liked;
      setUsers([...users]);
    }
  };

  const editUserHandler = (userId) => {
    const userIndex = findUserIndex(userId);
    if (userIndex !== -1) {
      setSelectedUser({ ...users[userIndex] });
      setOpenModal(true);
    }
  };

  const onConfirm = (userId, updatedUser) => {
    const userIndex = findUserIndex(userId);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      setUsers([...users]);
    }
  };

  const deleteHandler = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className={openModal ? classes.hideScrollBar : ""}>
      {openModal && (
        <Modal
          onClose={closeModalHandler}
          userDetail={selectedUser}
          onConfirm={onConfirm}
        />
      )}
      <div className={classes.userContainer}>
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onDelete={deleteHandler}
            onlike={likeHandler}
            onEdit={editUserHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
