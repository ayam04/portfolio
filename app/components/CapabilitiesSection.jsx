"use client";
import { motion } from "framer-motion";

const capabilities = [
  {
    no: "01",
    title: "Fine-Tuning & Alignment",
    desc: "Adapting foundation models to a domain and task — parameter-efficient fine-tuning, preference alignment, and the dataset work that actually moves the needle.",
    tags: ["LoRA", "QLoRA", "PEFT", "SFT", "RLHF / DPO", "Instruction tuning"],
  },
  {
    no: "02",
    title: "Model Optimization & Inference",
    desc: "Making models small and fast enough to ship — quantization, distillation, and high-throughput serving that holds up under real latency and cost budgets.",
    tags: ["GPTQ", "AWQ", "GGUF", "bitsandbytes", "vLLM", "TensorRT-LLM"],
  },
  {
    no: "03",
    title: "Agentic & Retrieval Systems",
    desc: "LLM systems that do real work — multi-agent orchestration, tool-use, and grounded retrieval with rerankers, evals, and guardrails. (Plain RAG is table stakes.)",
    tags: ["Multi-agent", "Tool-use", "Hybrid retrieval", "Rerankers", "Evals", "Guardrails"],
  },
  {
    no: "04",
    title: "Training & ML Engineering",
    desc: "From data to model — distributed training, mixed precision, and classical ML / CV / NLP for when a 70B model is the wrong tool for the job.",
    tags: ["PyTorch", "DeepSpeed / FSDP", "Mixed precision", "Computer Vision", "NLP", "W&B"],
  },
  {
    no: "05",
    title: "MLOps & Full-Stack Product",
    desc: "Getting it to production and keeping it healthy — containerized GPU services, pipelines, observability, and the full-stack product the model actually lives in.",
    tags: ["Docker", "Kubernetes", "Triton", "CI/CD", "FastAPI", "Next.js"],
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="px-5 md:px-10 py-24 md:py-36">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
        <div className="md:col-span-8">
          <span className="eyebrow text-ink/45 block mb-6">02 — Capabilities</span>
          <h2 className="display-section">
            What I<span className="font-serif-italic normal-case tracking-normal text-signal"> build</span>
          </h2>
        </div>
        <p className="md:col-span-4 text-base md:text-lg font-light text-ink/70 leading-relaxed md:pb-3">
          Full-spectrum AI engineering — from training and tuning to quantized production inference.
        </p>
      </div>

      {/* Rows */}
      <div className="border-t border-[var(--line)]">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.no}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            className="cursor-grow group relative border-b border-[var(--line)] overflow-hidden"
          >
            {/* Ink fill on hover */}
            <div className="absolute inset-0 bg-ink origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

            <div className="relative grid md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center py-8 md:py-10 px-1 md:px-4 transition-colors duration-500 group-hover:text-paper">
              <div className="md:col-span-1 font-display text-sm text-ink/40 group-hover:text-paper/60 transition-colors">
                {cap.no}
              </div>
              <h3 className="md:col-span-4 font-display text-2xl md:text-4xl tracking-tight leading-none">
                {cap.title}
              </h3>
              <p className="md:col-span-4 text-sm md:text-base font-light leading-relaxed text-ink/65 group-hover:text-paper/70 transition-colors">
                {cap.desc}
              </p>
              <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                {cap.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] uppercase tracking-[0.12em] border border-ink/20 group-hover:border-paper/30 rounded-full px-3 py-1 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
