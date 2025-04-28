import Tag from "@/components/Tag";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
    const selectedIndex: number = 0;
  return (
    <section className="py-24 mx-auto max-w-6xl px-12">
      <div>
        <div className="flex justify-center">
          <Tag title="FAQs" />
        </div>
        <h2 className="max-w-2xl mx-auto text-6xl md:text-7xl font-meduim text-center mt-6 ">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 mx-auto max-w-xl">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div className="flex justify-between items-center">
                <h2>{faq.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`feather feather-plus text-lime-400 flex-shrink-0 ml-auto ${selectedIndex === faqIndex ? "rotate-45": ""}`}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>

              <div className={`mt-6 ${selectedIndex === faqIndex ? "block" : "hidden"}`}>
                <p className="text-white/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
