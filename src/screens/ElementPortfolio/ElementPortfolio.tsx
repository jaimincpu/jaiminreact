import { ClientSectionSubsection } from "./sections/ClientsSectionSubsection";
import { EducationSectionSubsection } from "./sections/EducationSectionSubsection";
import { FooterSubsection } from "./sections/FooterSubsections";
import { HeaderSubsection } from "./sections/HeaderSubsections";
import { LatestWorkSectionSubsection } from "./sections/LatestWorkSectionsSubsection";
import { NavigationSubsection } from "./sections/NavigationSubsection";
import { SkillsSectionSubsection } from "./sections/SkillsSectionSubsection";

export const ElementPortfolio = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#0b0d0f] bg-grid-pattern overflow-hidden text-[#f1f5f9]">
      <NavigationSubsection />
      <HeaderSubsection />
      <SkillsSectionSubsection />
      <LatestWorkSectionSubsection />
      <ClientSectionSubsection />
      <EducationSectionSubsection />
      <FooterSubsection />
    </div>
  );
};
