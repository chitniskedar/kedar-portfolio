import type { Project } from "../content/projects";

const siteUrl = "https://kedarchitnis.vercel.app";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kedar Chitnis",
  url: `${siteUrl}/`,
  jobTitle: "Computer Science Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "PES University",
  },
  sameAs: ["https://github.com/chitniskedar"],
};

function getProjectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.longDescription ?? project.description,
    url: `${siteUrl}/projects/${project.id}`,
    codeRepository: project.github,
    programmingLanguage: project.tech,
    dateCreated: project.year,
    creativeWorkStatus: project.status,
    author: {
      "@type": "Person",
      name: "Kedar Chitnis",
      url: `${siteUrl}/`,
    },
  };
}

type StructuredDataProps = {
  project: Project | null;
};

export default function StructuredData({ project }: StructuredDataProps) {
  const data = project ? getProjectStructuredData(project) : personStructuredData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
