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
  const onFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className={classes.contacts} ref={sectionRef} id='contacts'>
      <div className={classes.contactsTitle}>
        <h3>Contact</h3>
        <p>Under this text you can see my phone and email, just message me to make our project together (you can contact me anytime u want!).</p>
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
            <span>Phone:</span>
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
        <form className={classes.contactsForm} onSubmit={onFormSubmit}>
          <div className={classes.formPart}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" id="name" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Yourmail@mail.org" name="email" id="email" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Job Offer" name="subject" id="subject" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <label htmlFor="message">Message</label>
            <textarea type="text" placeholder="Hello! What's the deal?" name="message" id="message" className={classes.formInput} />
          </div>
          <div className={classes.formPart}>
            <button type="submit" className={classes.formSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Contacts;