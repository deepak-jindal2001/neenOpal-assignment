import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGlobal,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineEdit,
  AiFillDelete,
} from "react-icons/ai";

import classes from "./card.module.css";

const Card = ({ userDetail, onDelete, onlike, onEditUser }) => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.headerImage}>
          <img
            src="https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy"
            width="200px"
            height="200px"
          />
        </div>
        <div className={classes.userDetail}>
          <h3>{userDetail.name}</h3>
          <div className={classes.userItem}>
            <AiOutlineMail style={{ fontSize: "21px" }} />
            <p>{userDetail.mail}</p>
          </div>
          <div className={classes.userItem}>
            <AiOutlinePhone style={{ fontSize: "21px" }} />
            <p>{userDetail.phoneNumber}</p>
          </div>
          <div className={classes.userItem}>
            <AiOutlineGlobal style={{ fontSize: "21px" }} />
            <p>{userDetail.site}</p>
          </div>
        </div>
        <div className={classes.actionBar}>
          <button
            className={classes.actionButton}
            onClick={() => onlike(userDetail.id)}
          >
            {userDetail.liked ? (
              <AiFillHeart
                style={{ fontSize: "23px", color: "rgb(255, 0, 0)" }}
              />
            ) : (
              <AiOutlineHeart
                style={{
                  fontSize: "23px",
                  color: "rgb(255, 0, 0)",
                }}
              />
            )}
          </button>
          <button
            className={classes.actionButton}
            onClick={() => onEditUser(userDetail.id)}
          >
            <AiOutlineEdit
              className={classes.actionBtn}
              style={{
                fontSize: "23px",
                color: "inherit",
              }}
            />
          </button>
          <button
            className={classes.actionButton}
            onClick={() => onDelete(userDetail.id)}
          >
            <AiFillDelete style={{ fontSize: "23px", color: "inherit" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
