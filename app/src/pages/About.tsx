import styles from './About.module.css'

function About() {
	return (
		<div className={styles.container}>
			<div className={styles.portraitContainer}>
				<img src="/images/self-portrait.jpg" className={styles.portrait} alt="Zach Richards portrait" />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>75% developer. 25% designer.</h2>
				<p>I have a passion for clean, polished designs and well thoughtout, organized code. Well versed in a variety of frontend technologies and frameworks such as React, ES6, and various styling methods (CSS, JSS, CSS Modules, etc). I've been in web development and design for 10+ years and keep things interesting through continual learning. This portfolio itself was built as a learning opportunity of modern CSS techniques. You can learn more about me by viewing my <a href="http://www.linkedin.com/pub/zachary-richards/20/47/94a" target="_blank">LinkedIn profile</a>.</p>
			</div>
		</div>
	)
}

export default About