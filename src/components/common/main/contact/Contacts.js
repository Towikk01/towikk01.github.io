import './contacts.scss'
import { FaMobileAlt, FaEnvelope, FaSearchLocation } from 'react-icons/fa'
const classes = {
  contacts: 'contacts',
  contactsTitle: 'contacts-title',
  contactsWrapper: ' contacts-wrapper',
  contactsInfo: 'contacts-wrapper-info',
  contactsInfoItem: 'contacts-wrapper-info-item',
  contactsLabel: 'contacts-label',
  conactsLabelTop: 'contacts-label-top',
  contactsButton: 'contacts-button'
}

function Contacts() {
  return (
    <div className={classes.contacts}>
      <div className={classes.contactsTitle}>
        <h3>Contact</h3>
        <p>You can contact me anytime, I put my personal contact adress and email, just message me to take our project together.</p>
      </div>
      <div className={classes.contactsWrapper}>
        <div className={classes.contactsInfo}>
          <div className={classes.contactsInfoItem}><FaSearchLocation /><span>Location:</span><p>Enthusiastiv 11, Kyiv, EU</p> </div>
          <div className={classes.contactsInfoItem}><FaEnvelope /><span>Email:</span> <a href='mailto:anton.masuytkin@gmail.com'>anton.masuytkin@gmail.com</a></div>
          <div className={classes.contactsInfoItem}><FaMobileAlt /><span>Call:</span> <a href='tel: +38(066)4190682'>+38(066)41 90 682</a></div>
          <div>map</div>
        </div>

        <label className={classes.contactsLabel}>
          <div className={classes.conactsLabelTop}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label for='Name'>Your name</label>
              <input type='text'></input>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label for='email'>Your Email</label>
              <input></input>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
            <label style={{ fontSize: '2rem' }} for='text'>Subject</label>
            <input style={{ padding: '10px 3rem' }}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
            <label style={{ fontSize: '2rem' }} for='text'>Message</label>
            <input style={{ padding: '4rem' }}></input>
          </div>
          <button className={classes.contactsButton}>Send message</button>
        </label>

      </div>

    </div >
  )
}


export default Contacts