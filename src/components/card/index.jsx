import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from "react-icons/ai";
import CardFooter from "./footer";
import { DEFAULT_PROFILE_IMAGE } from "../../constants";

import classes from "./styles.module.css";

const Card = ({ user, onDelete, onlike, onEdit }) => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.headerImage}>
          <img src={DEFAULT_PROFILE_IMAGE} />
        </div>
        <div className={classes.contentWrapper}>
          <h3>{user.name}</h3>
          <div className={classes.contentItem}>
            <AiOutlineMail size={21} />
            <p>{user.mail}</p>
          </div>
          <div className={classes.contentItem}>
            <AiOutlinePhone size={21} />
            <p>{user.phoneNumber}</p>
          </div>
          <div className={classes.contentItem}>
            <AiOutlineGlobal size={21} />
            <p>{user.site}</p>
          </div>
        </div>
        <CardFooter
          likeHandler={() => onlike(user.id)}
          editHandler={() => onEdit(user.id)}
          deleteHandler={() => onDelete(user.id)}
          liked={user.liked}
        />
      </div>
    </div>
  );
};

export default Card;
