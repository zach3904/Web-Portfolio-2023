import styles from './Experience.module.css'

function Experience() {
  return (
    <div>
      <div>
        <h2 className={styles.company}>OCTO CONSULTING</h2>
        <h4 className={styles.role}>UI/UX Engineer</h4>
        <div className={styles.dateTime}>
          <span>Phoenix, AZ</span> | <span>Jan '20 - Present</span>
        </div>
        <ul className={styles.responsibilities}>
          <li>Worked closely with designers to build out new company product interface using React, NextJS, Typescript, and Material UI</li>
          <li>Created a basic component library in Storybook for other developers to use based on elements from designs</li>
          <li>Used design skills to create visually appealing and consistent looking features during development without requiring a designer</li>
        </ul>
      </div>

      PORCH UI Engineer
      Seattle, WA | May '14 - March '19

      Initiated and championed an internal UI component library to maintain consistency using Storybook for live dev examples and Lingo to hold Sketch symbols for designers
      Developed frontend apps with React in an industry standard environment with tools such as NPM, Webpack, Node.js, and Gulp


      PROMETHEAN Front End Web Developer
      Seattle, WA | Mar '13 - Mar '14

      Extensive use of client side MVC and MVVM JavaScript frameworks AngularJS and Kendo UI in creating highly interactive single page apps.
      Worked with structured groups in an agile development pattern including some projects that required international communication and correspondence.
      Learned and implemented the latest techniques and solutions found in HTML5 and CSS3.

      CLOCKTOWER MEDIA Web Developer & Designer
      Kirkland, WA | June '11 - Mar '13

      Built front end of new projects using latest techniques and technologies including HTML5/CSS3, responsive CSS, and up to date practices.
      Worked closely with back end developers to create dynamic and data driven sites using MVC structure and AJAX.
      Designed several websites from scratch working with clients to achieve the look and feel they were after.

      MICROSOFT Windows Phone 7 design integrator & UI Developer
      Redmond, WA | Feb '11 - May '11

      NCSOFT - Web Developer
      Seattle, WA | Apr '10 - Oct '10
    </div>
  )
}

export default Experience