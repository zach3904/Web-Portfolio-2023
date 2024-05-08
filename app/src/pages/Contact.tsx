import styles from './Contact.module.css'

function Contact() {
	return (
		<div>
			<p>Reprehenderit reprehenderit et exercitation aute magna ut enim nostrud id. Magna irure veniam duis laborum sunt velit amet. Nisi pariatur aliquip irure ullamco anim deserunt commodo irure officia eiusmod occaecat. Sunt et Lorem aliquip aute nulla tempor duis quis in laboris incididunt cupidatat commodo.</p>

      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label>Message</label>
          <textarea rows={5}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
		</div>
	)
}

export default Contact