import React from 'react';
import '../styles.css';
import poster from '../assets/images/poster.jpg';

const Shows = () => {
  return (
    <section id="upcoming-shows" className="section">
      
      <h2>Upcoming Shows</h2>
      <div className="show">
        <img src={poster} alt='poster'></img>
        <h3>Dayaben Dot Com</h3>
        <p> Date:tdb  Location:tdb</p>
        <p> Dayaben is living with her husband, a son, a brother-in-law and his wife. She, just like any other common homemaker is always taken as granted for all the efforts and hard work she puts in to maintain the home. Her entire family, especially her sister-in-law continuously humiliates her and makes her do all their chores. One day her son is caught by police doing drugs behind the college and calls her and her husband to the police station. Something highly unexpected happens at the police station and Dayaben suddenly becomes breaking news and talk of the town. She rises to the fame, her popularity and public appearances for the inspirational speeches, turns her status in the family upside down. All these events put her husband and her sister-in-law in very tight spot to manage their reputation in the society. All the events, one by one unfolds laugh riots through out the play.
        </p>
        
      </div>
    </section>
  );
}

export default Shows;
