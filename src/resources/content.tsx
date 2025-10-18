import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Salah Eddine",
  lastName: "Ghannouch",
  name: `Salah Eddine Ghannouch`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "salah.ghannouch@gmail.com", // Update with your actual email
  location: "Africa/Casablanca", // Morocco timezone
  languages: ["English", "French", "Arabic"], // Update with your languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about software development and technology</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/salah-ghannouch", // Update with your GitHub profile
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/salah-eddine-ghannouch/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building innovative solutions through code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest work
        </Text>
      </Row>
    ),
    href: "/work/your-featured-project", // Update with your actual featured project
  },
  subline: (
    <>
      I'm Salah Eddine, a passionate software developer from Morocco, 
      <br />specializing in full-stack development and creating digital solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Salah Eddine is a Morocco-based software developer with a passion for creating innovative 
        digital solutions. With expertise in full-stack development, he specializes in building 
        scalable web applications and mobile solutions that solve real-world problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Your Current Company", // Update with your actual company
        timeframe: "2023 - Present", // Update with actual dates
        role: "Software Developer", // Update with your actual role
        achievements: [
          <>
            Developed and maintained web applications using modern technologies, 
            resulting in improved user experience and performance.
          </>,
          <>
            Collaborated with cross-functional teams to deliver high-quality software solutions 
            that meet business requirements and exceed client expectations.
          </>,
        ],
        images: [
          // Add your project images here
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Your Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Previous Company", // Update with your previous company
        timeframe: "2021 - 2023", // Update with actual dates
        role: "Junior Developer", // Update with your actual role
        achievements: [
          <>
            Contributed to the development of multiple web applications using various 
            programming languages and frameworks.
          </>,
          <>
            Participated in code reviews and collaborated with senior developers to 
            improve code quality and learn best practices.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Your University", // Update with your actual university
        description: <>Studied Computer Science/Software Engineering.</>,
      },
      {
        name: "Online Courses & Certifications",
        description: <>Completed various online courses in web development, mobile development, and cloud technologies.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Building responsive and interactive user interfaces with modern frameworks and libraries.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Frontend Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>Developing robust server-side applications and APIs with various technologies.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Backend Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Development",
        description: (
          <>Creating cross-platform mobile applications for iOS and Android.</>
        ),
        tags: [
          {
            name: "React Native",
            icon: "react",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Swift",
            icon: "swift",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Mobile Project",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about development and technology...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
