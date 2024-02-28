import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineEdit,
  AiFillDelete,
} from "react-icons/ai";

import classes from "./styles.module.css";

const cardFooter = ({ likeHandler, editHandler, deleteHandler, liked }) => {
  return (
    <div className={classes.actionBar}>
      <button className={classes.actionButton} onClick={likeHandler}>
        {liked ? (
          <AiFillHeart
            className={`${classes.actionButtonIcon} ${classes.likeButton}`}
          />
        ) : (
          <AiOutlineHeart
            className={`${classes.actionButtonIcon} ${classes.likeButton}`}
          />
        )}
      </button>
      <button className={classes.actionButton} onClick={editHandler}>
        <AiOutlineEdit className={classes.actionButtonIcon} />
      </button>
      <button className={classes.actionButton} onClick={deleteHandler}>
        <AiFillDelete className={classes.actionButtonIcon} />
      </button>
    </div>
  );
};

export default cardFooter;
