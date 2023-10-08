import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
const MeetupItem = ({ meetup }) => {
  return (
    <li key={meetup.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} width="200" alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>

          <p>{meetup.description}</p>
          <p>Address: {meetup.address}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
