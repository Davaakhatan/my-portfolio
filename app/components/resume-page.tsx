"use client"

import { Download, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const experiences = [
    {
      id: 1,
      title: "Full-Stack Java Developer",
      company: "Resource Point LLC",
      location: "Troy, MI",
      period: "Jan 2025 – Present",
      description: [
        "Designed and developed backend services using Java 11 17, Spring Boot, Hibernate, and REST APIs, delivering modular and scalable solutions.",
        "Built interactive UIs with React.js, Bootstrap, HTML5, CSS3, and JavaScript, ensuring responsive layouts for customers.",
        "Developed and deployed Microservices with Kafka messaging, supporting event-driven architecture and real-time workflows.",
        "Automated CI/CD pipelines with Maven, Jenkins, GitHub Actions, Docker, and Kubernetes for faster and reliable releases",
        "Optimized queries across PostgreSQL, MySQL, and MongoDB, reducing response time significantly.",
        "Implemented Swagger/OpenAPI documentation for REST APIs, improving collaboration between backend and frontend teams.",
        "Conducted unit and integration testing using JUnit5, TestNG, and Mockito, achieving higher test coverage.",
        "Leveraged AWS services (EC2, EKS, S3, RDS) for cloud deployments and monitoring with CloudWatch, Grafana, Prometheus.",
      ],
    },
    {
      id: 2,
      title: "Graduate Assistant (Software Researcher)",
      company: "Gannon University",
      location: "Erie, PA",
      period: "Feb 2024 – May 2025",
      description: [
        "Developed MERN-stack course scheduling tools to replace Excel processes and improve planning efficiency.",
        "Created secure Node.js/Express APIs and interactive React interfaces for course delivery.",
        "Built an AI-powered SDLC generator using Vercel, Supabase, and OpenAI API to generate project docs.",
        "Assisted with AI-integrated research and supported faculty with software engineering education tools.",
      ],
    },
    {
      id: 3,
      title: "Full-Stack Developer (Intern)",
      company: "Erie Technology Incubator",
      location: "Erie, PA",
      period: "Jan 2025 – May 2025",
      description: [
        "Built full-stack cloud applications using React.js, Node.js, MobX, and MySQL with reusable front-end components.",
        "Created REST APIs and implemented Redis caching to improve data retrieval and performance.",
        "Converted Figma UI into modular Tailwind-based components, enhancing design consistency.",
        "Streamlined development processes and improved system responsiveness for internal operations.",
      ],
    },
    {
      id: 4,
      title: "Full-Stack Java Developer",
      company: "Khan Bank",
      location: "Ulaanbaatar, Mongolia",
      period: "Jan 2022 – Jul 2023",
      description: [
        "Migrated legacy Java WebLogic apps into Spring Boot microservices, improving modularity and scalability.",
        "Developed REST APIs with Spring Boot and Hibernate, integrated with React.js and Angular frontends.",
        "Implemented Kafka event-driven architecture for real-time transaction processing across banking modules.",
        "Automated CI/CD pipelines using Jenkins, Maven, GitHub Actions, Docker, and Kubernetes, ensuring stable deployments.",
	      "Improved financial transaction systems by optimizing queries in PostgreSQL and Oracle, reducing latency.",
        "Conducted unit, integration, and end-to-end testing using JUnit5, Mockito, Selenium, and TestNG.",
        "Deployed applications to AWS EKS and Azure AKS with observability provided by Grafana, Prometheus, and ELK Stack.",
        "Documented REST APIs with Swagger/OpenAPI for internal and external integrations.",
      ],
    },
    {
      id: 5,
      title: "Software Security Engineer",
      company: "Infosolution LLC",
      location: "Ulaanbaatar, Mongolia",
      period: "Sep 2017 – Jan 2022",
      description: [
        "Designed and developed enterprise web apps using Java 8 11, Spring Boot, Hibernate, and REST APIs, serving financial and government clients.",
        "Built modern frontends with React.js, AngularJS, Bootstrap, HTML5, CSS3, connected to Java-based backends.",
        "Integrated Spring Security, OAuth2, and JWT for secure authentication and role-based authorization.",
        "Created JSP Servlet applications for reporting and migrated legacy systems into Spring Boot and Hibernate architectures.",
        "Implemented Microservices with Kafka event streaming for inter-application communication.",
        "Automated deployments and CI/CD pipelines with Docker, Kubernetes, Jenkins, and Azure DevOps, reducing downtime and improving efficiency.",
        "Designed database schemas and optimized queries in PostgreSQL, Oracle, and MongoDB for high-volume systems.",
        "Used Swagger/OpenAPI for API documentation and standardization.",
      ],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Master of Science in Software Engineering",
      school: "Gannon University",
      location: "Erie, PA",
      period: "Aug 2023 – May 2025",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      school: "Mongolian University of Science and Technology",
      location: "Ulaanbaatar, Mongolia",
      period: "Aug 2011 – Dec 2016",
    },
  ]

  const certifications = [
    "Microsoft 365 Certified: Fundamentals",
    "Microsoft 365 Certified: Security Associate",
    "Microsoft 365 Certified: Enterprise Administrator Expert",
    "AWS Certified Cloud Practitioner",
  ]

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    Backend: ["Java", "Spring Boot", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Ansible"],
    Security: ["DAST/SAST", "Pentesting", "Azure Security Center", "M365 Intune", "DevSecOps"],
    Monitoring: ["ELK Stack", "Grafana", "Prometheus", "Nagios"],
    Cloud: ["AWS", "Azure", "GCP (basic)"],
  }

  return (
    <div className="relative bg-zinc-900 h-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white h-full overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">Resume</h1>
          <Link
            href="/Assets/Resume.pdf"
            target="_blank"
            className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-emerald-500 text-zinc-900 rounded-lg hover:bg-emerald-400 transition-colors"
          >
            <Download size={18} />
            Download PDF
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Work Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-emerald-400">{exp.title}</h3>
                <span className="text-zinc-400">{exp.period}</span>
              </div>
              <h4 className="text-lg mb-2">
                {exp.company} – {exp.location}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h3 className="text-xl font-bold text-emerald-400">{edu.degree}</h3>
                <span className="text-zinc-400">{edu.period}</span>
              </div>
              <p className="text-lg">
                {edu.school} – {edu.location}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Certifications</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-zinc-700 text-emerald-400 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
