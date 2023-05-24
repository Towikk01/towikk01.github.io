import './contacts.scss'
import { FaMobileAlt, FaEnvelope, FaSearchLocation, FaMap } from 'react-icons/fa';


const classes = {
  contacts: 'contacts',
  contactsTitle: 'contacts-title',
  contactsWrapper: ' contacts-wrapper',
  contactsInfo: 'contacts-info',
  contactsInfoItem: 'contacts-info-item',
  contactsForm: 'contacts-form',
  formPart: 'form-part',
  formInput: 'form-input',
  formSubmit: 'form-submit',
};
 
function Contacts({ sectionRef }) {
  return (
    <div className={classes.contacts} ref={sectionRef} id='contacts'>
      <div className={classes.contactsTitle}>
        <h3>Contact</h3>
        <p>You can contact me anytime, I put my personal contact address and email, just message me to take our project together.</p>
      </div>
      <div className={classes.contactsWrapper}>
        <div className={classes.contactsInfo}>
          <div className={classes.contactsInfoItem}>
            <FaSearchLocation />
            <span>Location:</span>
            <p>Enthusiastiv 11, Kyiv, EU</p>
          </div>
          <div className={classes.contactsInfoItem}>
            <FaEnvelope />
            <span>Email:</span>
            <p><a class="kekus" href='mailto:anton.masuytkin@gmail.com'>anton.masuytkin@gmail.com</a></p>
          </div>
          <div className={classes.contactsInfoItem}>
            <FaMobileAlt />
            <span>Call:</span>
            <p><a class="kekus" href='tel: +38(066)4190682'>+38(066)41 90 682</a></p>
          </div>
          <div className={classes.contactsInfoItem}>
            <FaMap />
            <span>Map:</span>
            <p style={{
              height: '300px',
              width: '100%'
            }}>
              <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2541.215861915326!2d30.60154857637128!3d50.43707978679752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI2JzEzLjgiTiAzMMKwMzYnMTIuOCJF!5e0!3m2!1sen!2spl!4v1684962473930!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <form className={classes.contactsForm}>
          <div className={classes.formPart}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Anton" name="name" id="name" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="anton@mail.org" name="email" id="email" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Job Offer" name="subject" id="subject" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="message">Message</label>
            <textarea type="text" placeholder="Hello! How are you!" name="message" id="message" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <button type="submit" className={classes.formSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>

    //     <label className={classes.contactsLabel}>
    //       <div className={classes.conactsLabelTop}>
    //         <div style={{ display: 'flex', flexDirection: 'column' }}>
    //           <label htmlFor='Name'>Your name</label>
    //           <input type='text'></input>
    //         </div>
    //         <div style={{ display: 'flex', flexDirection: 'column' }}>
    //           <label htmlFor='email'>Your Email</label>
    //           <input></input>
    //         </div>
    //       </div>
    //       <div style={{ display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
    //         <label style={{ fontSize: '2rem' }} htmlFor='text'>Subject</label>
    //         <input style={{ padding: '10px 3rem' }}></input>
    //       </div>
    //       <div style={{ display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
    //         <label style={{ fontSize: '2rem' }} htmlFor='message'>Message</label>
    //         <input style={{ padding: '4rem' }} name='message' id='message'></input>
    //       </div>
    //       <button className={classes.contactsButton}>Send message</button>
    //     </label>

    //   </div>

    // </div >
  )
}


export default Contacts;