import Tag from "@/components/Tag";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaLogo,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionLogo,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackLogo,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeLogo,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerLogo,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    description: "GitHub is the leading platform for code collaboration.",
  },
];


export type IntegrationType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden px-8">
      <div className="grid lg:grid-cols-2 items-center lg:gap-16 max-w-5xl mx-auto">
        <div>
          <div className="flex justify-center lg:justify-start">
            <Tag title="Integrations" />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-6xl md:text-7xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools and workflows
              to collaborate across platforms.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl h-[400px] lg:h-[800px] mt-8 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationColumn integrations={integrations} />

            <IntegrationColumn
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
