import * as React from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

export interface JobData {
    id: string;
    companyName: string;
    companyLogo: string;
    companyDescription: string;
    businessDomains: string[];
    jobTitle: string;
    duration: string;
    jobDescription: string[];
    tags: string;
}

interface ExperienceItemProps {
    job: JobData;
    isProgression?: boolean;
    isLastInProgression?: boolean;
    showCompanyHeader?: boolean;
}

export function ExperienceItem({ job, isProgression = false, isLastInProgression = false, showCompanyHeader = true }: ExperienceItemProps) {
    const [isJobDescriptionVisible, setIsJobDescriptionVisible] = React.useState(false);

    const toggleJobDescription = () => {
        setIsJobDescriptionVisible(!isJobDescriptionVisible);
    };

    return (
        <section className={`p-4 ${isProgression ? 'relative' : ''}`}>
            {/* Clean progression line */}
            {isProgression && (
                <div className="absolute left-8 top-0 w-px h-full bg-gray-200 dark:bg-gray-600"></div>
            )}

            {showCompanyHeader && (
                <div className="flex items-center gap-3 mb-3">
                    <img src={job.companyLogo} alt={`${job.companyName} Logo`} className="w-6 h-6" />
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <h3 className="text-lg leading-snug font-medium cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                                {job.companyName}
                            </h3>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-sm">Company Overview</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {job.companyDescription}
                                </p>
                                <div className="pt-2">
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Business Domain:</span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {job.businessDomains.map((domain, index) => (
                                            <span
                                                key={index}
                                                className="inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                                            >
                                                {domain}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            )}
            <div className="flex items-center gap-3">
                {/* <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml size-4" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                </div> */}
                <div className="border border-gray-700 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml size-4" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                </div>
                <div className="flex items-center justify-between w-full">
                    <h4
                        className="font-medium"
                        onClick={toggleJobDescription}
                    >
                        {job.jobTitle}
                    </h4>
                    {isJobDescriptionVisible ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}


                </div>
            </div>

            <p className="text-sm text-gray-500 font-mono pl-9">
                {job.duration}
            </p>
            {isJobDescriptionVisible && (
                <>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 font-mono mt-3 space-y-1 pl-14">
                        {job.jobDescription.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>

                    <div className="mt-4 pl-14">
                        <div className="flex flex-wrap gap-2">
                            {job.tags.split(', ').map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                >
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                </>

            )}
        </section>
    );
} 