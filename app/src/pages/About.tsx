import { BaseSyntheticEvent, useState, useRef } from 'react'
import styles from './About.module.css'
import Input from '../components/input/input'
import Textarea from '../components/input/textarea'
import emailjs from '@emailjs/browser'
import LoadingSpinner from '../components/loading/spinner'
import CheckIcon from '../components/icons/check-icon'

function About() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [contactFormState, setContactFormState] = useState<'loading' | 'success' | 'failed' | null>()
  const form = useRef()
  
  const handleContactSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setContactFormState('loading')

    emailjs.sendForm('service_yu7ipj6', 'template_4jwzxe9', form.current, {
      publicKey: 'AN5jrfrN0qdipV6Mq'
    })
    .then(() => {
        setContactFormState('success')

        setTimeout(() => {
          setContactFormState(null)
          setNameValue('')
          setEmailValue('')
          setMessageValue('')
        }, 1500)
      }, (error) => {
        setContactFormState('failed')

        setTimeout(() => {
          setContactFormState(null)
        }, 2500)
      },
    )
  }
  
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.title}>80% developer.<br/>20% designer.</h2>
				<p className={styles.bio}>UI developer/occasional designer with a passion for building solid interfaces that look great while remaining easy to use. Strong attention to detail and effort taken to maintain consistency in both the UI and code. Somewhere in between frontend developer and designer. Experience in building UI libraries to promote consistent use of components and styling.</p>
			</div>
			<div className={styles.portraitContainer}>
				<img src="/images/self-portrait.jpg" className={styles.portrait} alt="Zach Richards portrait" />
			</div>
      <div className={styles.formContainer}>
        <form className={styles.form} ref={form} onSubmit={handleContactSubmit}>
          {(contactFormState && contactFormState !== 'failed') && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingInner}>
                {contactFormState === 'loading' && <LoadingSpinner />}
                {contactFormState === 'success' && <span className={styles.formSuccessIcon}><CheckIcon /></span>}
              </div>
            </div>
          )}
          <h6 className={styles.formHeader}>Contact</h6>
          <Input label="Name" name="name" value={nameValue} updateFn={setNameValue} />
          <Input label="Email" name="email" type="email" value={emailValue} updateFn={setEmailValue} />
          <Textarea label="Message" name="message" value={messageValue} updateFn={setMessageValue} />
          <div className={styles.formFooter}>
            {contactFormState === 'failed' && <span className={styles.formError}>Sorry, an error occured. Try again.</span>}
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
		</div>
	)
}

export default About