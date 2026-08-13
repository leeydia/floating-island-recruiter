import { FloatingIslandExperience } from "@/components/experience/FloatingIslandExperience";
import { ExperienceProvider } from "@/context/ExperienceContext";

export default function Home() {
  return (
    <ExperienceProvider>
      <FloatingIslandExperience />
    </ExperienceProvider>
  );
}
