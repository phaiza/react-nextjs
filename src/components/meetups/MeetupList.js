import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
const MeetupList = ({ meetuplist }) => {
  return (
    <div>
      <ul className={classes.list}>
        {meetuplist.map((meetup) => {
          return <MeetupItem meetup={meetup} key={meetup.id} />;
        })}
      </ul>
    </div>
  );
};

export default MeetupList;
