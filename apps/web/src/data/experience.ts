import type { ExperienceItemType } from "@/components/work-experience";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
        id: "bki",
        companyName: "PT. Biro Klasifikasi Indonesia",
        companyLogo: "/logo/bki-logo.svg",
        positions: [
            {
                id: "bki-software-engineer",
                title: "Software Engineer",
                employmentPeriod: "Jan 2015 - Dec 2015",
                employmentType: "Full-time",
                description: `- Architected and developed an offline-first desktop application, implementing robust data synchronization between a legacy Laravel/MySQL system and a modern React/TypeScript stack, resulting in seamless 100% offline operations and improved user productivity in low-connectivity environments.`,
                icon: "code",
                skills: ["Laravel", "React", "TypeScript", "Electron", "MySQL", "Offline-first", "Desktop Application"],
                isExpanded: false
            }
        ]
    },
    {
        id: "freight-hub",
        companyName: "Freight-hub (Meratus Group)",
        companyLogo: "/logo/freighthub-logo.svg",
        positions: [
            {
                id: "freight-hub-software-engineer",
                title: "Software Engineer",
                employmentPeriod: "Aug 2023 - Feb 2025",
                employmentType: "Full-time",
                description:
                    `- Engineered a seamless integration of GPS functionality, optimizing location-based services and enhancing user experience through precise geolocation features.
- Revamping mobile apps of React Native.`,
                icon: "code",
                skills: ["Vue", "React Native", "Sequelize", "PostgreSQL", "AWS Lambda"],
                isExpanded: false
            }
        ]
    },
    {
        id: "koinworks",
        companyName: "KoinWorks",
        companyLogo: "/logo/koinworks-logo.png",
        positions: [
            {
                id: "koinworks-frontend-engineer",
                title: "Frontend Engineer",
                employmentPeriod: "Aug 2023 - Feb 2025",
                employmentType: "Full-time",
                description:
                    `- Doing regular sharing sessions within the frontend team to promote the exchange of best practices and stay up-to-date with the latest tech trends. 
- Spearheaded the adoption of cutting-edge technologies, including Next.js as the main framework, Mantine as the UI Library, and React Query and Zustand for state management which lead to cutting development time to 50% in general. 
- Migrate legacy PHP Laravel backoffice to a modern Golang and React-based solution to provide better developer experience and increase code maintainability in general.`,
                icon: "code",
                skills: ["React.js", "Next.js", "Zustand", "React-Query", "Laravel", "Vue.js", "Nuxt.js"],
                isExpanded: false
            }
        ]
    },
    {
        id: "paper-id",
        companyName: "Paper.id",
        companyLogo: "/logo/paperid-logo.png",
        positions: [
            {
                id: "paper-id-intern",
                title: "Frontend Engineer Intern",
                employmentPeriod: "Aug 2023 - Nov 2023",
                employmentType: "Internship",
                description: `- Implemented Google Tag Manager to optimize data tracking and analytics processes. 
- Successfully implemented mobile-specific features, leveraging responsive design principles and mobile-first development approaches to deliver exceptional user experiences.`,
                icon: "code",
                skills: ["Angular", "Ionic", "Firebase", "Google Tag Manager"],
                isExpanded: false
            },
            {
                id: "paper-id-fulltime",
                title: "Frontend Engineer",
                employmentPeriod: "Nov 2023 - Feb 2025",
                employmentType: "Full-time",
                description: `- Continued development of mobile-specific features and responsive design implementations. Collaborated with cross-functional teams to deliver high-quality frontend solutions`,
                icon: "code",
                skills: ["Angular", "Ionic", "Firebase", "Google Tag Manager"],
                isExpanded: false
            }
        ]
    }
]; 