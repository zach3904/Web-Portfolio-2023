import { BaseSyntheticEvent, useState, useRef } from 'react'
import styles from './About.module.css'
import Input from '../components/input/input'
import Textarea from '../components/input/textarea'
import emailjs from '@emailjs/browser'

function About() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const form = useRef()
  
  const handleContactSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()

    emailjs.sendForm('service_yu7ipj6', 'template_4jwzxe9', form.current, {
      publicKey: 'AN5jrfrN0qdipV6Mq'
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
  
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.title}>75% developer.<br/>25% designer.</h2>
				<p className={styles.bio}>I have a passion for clean, polished designs and well thoughtout, organized code. Well versed in a variety of frontend technologies and frameworks such as React, ES6, and various styling methods (CSS, JSS, CSS Modules, etc). I've been in web development and design for 10+ years and keep things interesting through continual learning. This portfolio itself was built as a learning opportunity of modern CSS techniques. You can learn more about me by viewing my <a href="http://www.linkedin.com/pub/zachary-richards/20/47/94a" target="_blank">LinkedIn profile</a>.</p>
			</div>
			<div className={styles.portraitContainer}>
				<img src="/images/self-portrait.jpg" className={styles.portrait} alt="Zach Richards portrait" />
			</div>
      <div className={styles.formContainer}>
        <form className={styles.form} ref={form} onSubmit={handleContactSubmit}>
          <h6 className={styles.formHeader}>Contact</h6>
          <Input label="Name" name="name" value={nameValue} updateFn={setNameValue} />
          <Input label="Email" name="email" value={emailValue} updateFn={setEmailValue} />
          <Textarea label="Message" name="message" value={messageValue} updateFn={setMessageValue} />
          <div style={{textAlign: 'right'}}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
		</div>
	)
}

export default About