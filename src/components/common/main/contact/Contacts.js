import './contacts.scss'
import { FaMobileAlt, FaEnvelope, FaSearchLocation, FaMap } from 'react-icons/fa';


const classes = {
  contacts: 'contacts',
  contactsTitle: 'contacts-title',
  contactsWrapper: 'contacts-wrapper',
  contactsInfo: 'contacts-info',
  contactsInfoItem: 'contacts-info-item',
  contactsInfoItemMap: 'contacts-info-item-map',
  contactsForm: 'contacts-form',
  formPart: 'form-part',
  formInput: 'form-input',
  formSubmit: 'form-submit',
  top: 'top',
  contactsData: 'contacts-data',
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
      </div>
      <div className={classes.contactsWrapper}>
        <form className={classes.contactsForm} onSubmit={onFormSubmit}>
          <div className={classes.contactsData}>
            <div className={classes.contactsInfoItem}>
              <FaEnvelope />
              <span>Email:</span>
              <p><a class="kekus" href='mailto:anton.masuytkin@gmail.com'>anton.masuytkin@gmail.com</a></p>
            </div>
            <div className={classes.contactsInfoItem}>
              <FaMobileAlt />
              <span>Phone:</span>
              <p><a class="kekus" href='tel: +38 (066) 41 90 682'>+38 (066) 41 90 682</a></p>
            </div>
          </div>
          <div className={classes.top}>
            <div className={classes.formPart}>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" name="name" id="name" className={classes.formInput} />
            </div>
            <div className={classes.formPart}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Yourmail@mail.org" name="email" id="email" className={classes.formInput} />
            </div>
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