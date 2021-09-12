const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'nhulox97',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sergio Bernal',
  role: 'Back End Engineer',
  description: "I'm a developer located on LATAM, currently working as Back End developer, but with good skills on Front End. Good skills on: solving problems, define requirements, problem analysis and also good to work with multi-disciplinary teams.",
  resume: 'https://github.com/nhulox97/english-resume/blob/main/main.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sergio-abc/',
    github: 'http://github.com/nhulox97',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'base-express-sequelize-api',
    description:
      'This is template-like project where I set up express + mongoose to build stable and scalable REST API\'s. Includes error handling for mongoose or express exceptions',
    stack: ['Express', 'Javascript', 'Mongoose'],
    sourceCode: 'https://github.com/nhulox97/base-express-sequelize-api',
  },
  {
    name: 'ts-run-length',
    description:
      'A cli-app implementation of run-length algorithm, which helps you to encode or decode your text files',
    stack: ['TypeScript', 'Yargs'],
    sourceCode: 'https://github.com/nhulox97/ts-run-length',
  },
  {
    name: 'base-react-app',
    description:
      'A dashboard template app built with React, Redux and Tailwind',
    stack: ['Tailwind CSS', 'JSX', 'React', 'Redux'],
    sourceCode: 'https://github.com/wazunga/base-react-app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'TypeScript',
  'NestJS',
  'Postgres',
  'MongoDB',
  'Redis',
  'TypeORM',
  '0Auth 2.0',
  'JWT',
  'JSX',
  'JavaScript',
  'React',
  'Redux',
  'Tailwind CSS',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sergiobernal909@gmail.com',
}

export { header, about, projects, skills, contact }
