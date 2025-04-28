import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import KeyboardKey from "@/components/KeyboardKey";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">

      <div className="flex justify-center">
        <Tag title="Features" />
      </div>

      <div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">

        {/* Feature 1 */}
        <div className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict free team editing."
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span className="size-1.5 rounded-full bg-white" key={i} />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
        </div>

        {/* Feature 2 */}
        <div className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to your actions."
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We&apos;ve achieved{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ">
                  incredible
                </span>{" "}
                results this year
              </p>
            </div>
          </FeatureCard>
        </div>

        {/* Feature 3 */}
        <div className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto">
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
          >
            <div className="gap-4 aspect-video flex items-center justify-center">
              <KeyboardKey className="w-28">Shift</KeyboardKey>
              <KeyboardKey>alt</KeyboardKey>
              <KeyboardKey>c</KeyboardKey>
            </div>
          </FeatureCard>
        </div>
      </div>

      {/* Feature tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-neutral-900 gap-3 items-center border border-white/10 rounded-2xl inline-flex px-3 md:px-4 py-1.5 md:py-2 md:m-2"
          >
            <span className="size-5 rounded-full inline-flex items-center justify-center bg-lime-400 text-neutral-950 text-xl">
              &#10038;
            </span>
            <span className="text-white font-semibold md:texl-lg">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
