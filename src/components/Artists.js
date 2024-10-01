import React from 'react';
import '../styles.css';
import artist1 from '../assets/images/Pratima.T.jpg';
import artist2 from '../assets/images/Jitu_Kotak.jpg';
import artist3 from '../assets/images/Yohana_vachhani.jpg'
import artist4 from '../assets/images/Yunus_Patel.jpg'
import artist5 from '../assets/images/Hitesh_Parekh.jpg'
import artist6 from '../assets/images/Munir_Khan.jpg';
const Artists = () => {
  return (
    <section id="artists" className="section">
      <h2>Our Artists</h2>
      <div className="artist">
        <img src={artist1} alt="Artist 1" />
        <h3>Pratima T</h3>
        <p> </p>
      </div>
      <div className="artist">
        <img src={artist2} alt="Artist 2" />
        <h3>Jitu Kotak</h3>
        <p></p>
      </div>
      <div className='artist'>
        <img src={artist3}/>
        <h3>Yohana Vachhani</h3>
      </div>
      <div className="artist">
        <img src={artist4} alt="Artist 2" />
        <h3>Yunus Patel</h3>
        <p></p>
      </div>
      <div className="artist">
        <img src={artist5} alt="Artist 2" />
        <h3>Hitesh Parekh</h3>
        <p></p>
      </div>
      <div className="artist">
        <img src={artist6} alt="Artist 2" />
        <h3>Munir Khan</h3>
        <p></p>
      </div>
    </section>
  );
}

export default Artists;
