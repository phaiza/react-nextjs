import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();
  const onAddMeetupHandler = (meetupData) => {
    // console.log(meetupData);
    fetch(
      'https://react-course-11f40-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
