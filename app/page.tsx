import DotGrid from "./components/DotGrid";
import CopyButton from "./components/CopyButton";
import DemoSnippet from "./components/DemoSnippet";

const INSTALL_CMD = "pip install toewser";

const ONBOARDING_PROMPT = `Install toewser in this project. 
Carefully examine how the code environment is set up and how project dependencies are managed.

Ask me which LLM provider I want to use (OpenAI, Anthropic, Gemini, Groq, or local Ollama) and where my API key lives, 
then write a starter script for my use case. Don't run it until I confirm it.`;

const PAIN_POINTS = [
  {
    pain: "Vendor lock-in",
    fix: "Switch from Anthropic → OpenAI → Google → Groq by changing 1 line",
  },
  {
    pain: "Massive PRs",
    fix: "No more 400-line SDK rewrites. Just 1–4 line changes. Clean reviews.",
  },
  {
    pain: "Brittle seed scripts",
    fix: "Natural language prompts. No more brittle seed scripts.",
  },
  {
    pain: "Data sharing chaos",
    fix: "Seed directly to Bigtable, DynamoDB, or MongoDB. Team exports CSV/JSON from console.",
  },
  {
    pain: "Testing with fake data",
    fix: "LLM-generated data is contextually aware.",
  },
];

const TRUST_ITEMS = [
  { what: "Your prompts", where: "Stay local or go to your chosen provider" },
  { what: "Your API keys", where: "We never see them." },
  { what: "Your generated data", where: "Goes directly to your database. We never see it." },
];


export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-white text-neutral-900">
      <DotGrid />

      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">toewser</span>
            <span className="hidden font-mono text-xs text-neutral-500 sm:inline">
              like &ldquo;tazer&rdquo;
            </span>
          </div>
          <div className="flex items-center gap-2">
            <code className="hidden font-mono text-xs text-neutral-600 md:inline">
              {INSTALL_CMD}
            </code>
            <CopyButton text={INSTALL_CMD} />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-red-600">
            Provider-agnostic ETL &amp; synthetic data
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Stop rewriting your pipeline every time a provider changes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Toewser is a provider-agnostic ETL and seed-data library. Switch between
            OpenAI, Anthropic, Gemini, Groq, and Ollama by changing 1–4 lines of
            code, and generate contextually-aware synthetic data with plain-English
            prompts instead of brittle seed scripts.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-3 font-mono text-sm text-white sm:w-auto">
              <span>$ {INSTALL_CMD}</span>
              <CopyButton
                text={INSTALL_CMD}
                label="Copy"
                className="ml-6 border-neutral-600 text-neutral-300 hover:border-white hover:text-white"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-neutral-500">
            No signup. No login. No tracking cookies. No sales call to see a demo.
          </p>
        </section>

        {/* Agent onboarding */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Onboard with your AI agent
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Paste this into Claude Code, Codex, or your AI agent of choice and it will install Toewser, 
              ask which provider you want, your goal, and write a starter script for your use case.
            </p>
            <div className="mt-8 border border-neutral-200 bg-neutral-50">
              <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2">
                <span className="font-mono text-xs text-neutral-500">
                  Claude Code prompt
                </span>
                <CopyButton text={ONBOARDING_PROMPT} />
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-mono text-sm leading-7 text-neutral-800">
                {ONBOARDING_PROMPT}
              </pre>
            </div>
          </div>
        </section>

        {/* Two audiences */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="mt-3 text-xl leading-8 text-neutral-900">
                Delete hundreds of lines of provider-specific SDK code. Swap models
                mid-workflow, even programmatically inside a loop. <strong>No vendor lock-in. Clean PRs. Fast reviews.</strong>
              </p>
            </div>
            <div>
              <p className="mt-3 text-xl leading-8 text-neutral-900">
                Get coherent mock data in minutes, not tickets. Write what you need
                in plain English (e.g. product reviews, support tickets, trivia
                questions, etc.)
              </p>
            </div>
          </div>
        </section>

        {/* Code example */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Seed your database in as little as <span className="text-red-600">7</span> lines + a prompt
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Toewser uses a language model of your choice to understand context so the data it produces actually makes
              sense for your schema. We orchestrate the model, your database, and your prompt so you can focus on building instead of rewriting.
            </p>
            <div className="mt-8">
              <DemoSnippet />
            </div>

            <p className="mt-10 text-neutral-600">
              Switching providers mid-pipeline is a 1–4 line change, not a rewrite:
            </p>
            <div className="mt-4 overflow-x-auto border border-neutral-200 bg-neutral-50">
              <pre className="overflow-x-auto px-4 py-4 font-mono text-sm leading-7 text-neutral-800">
                {"toewser = Toewser(model="}
                <span className="text-red-600">&quot;openai/gpt-4.1&quot;</span>
                {", model_api_key=os.environ.get("}
                <span className="text-red-600">&quot;OPENAI_API_KEY&quot;</span>
                {"), db_client=bigquery_client)"}
                {"\n\n"}
                <span className="text-neutral-400"># after: same script, different provider, instant switch</span>
                {"\n"}
                {"toewser.model = "}
                <span className="text-red-600">&quot;anthropic/claude-sonnet-5&quot;</span>
                {"\ntoewser.model_api_key = os.environ.get("}
                <span className="text-red-600">&quot;ANTHROPIC_API_KEY&quot;</span>
                {")\n"}
              </pre>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              We solve the pain points of building with language models
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-neutral-300">
                    <th className="py-3 pr-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                      Pain point
                    </th>
                    <th className="py-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                      Toewser fix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PAIN_POINTS.map((row) => (
                    <tr key={row.pain} className="border-b border-neutral-200">
                      <td className="py-4 pr-6 align-top font-medium text-neutral-900 whitespace-nowrap">
                        {row.pain}
                      </td>
                      <td className="py-4 align-top text-neutral-600">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              &ldquo;Where does my data go?&rdquo;
            </h2>

            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Stays with you
                </h3>
                <dl className="mt-4 space-y-4">
                  {TRUST_ITEMS.map((item) => (
                    <div key={item.what} className="border-t border-neutral-200 pt-3">
                      <dt className="font-medium text-neutral-900">{item.what}</dt>
                      <dd className="mt-1 text-sm text-neutral-600">{item.where}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-4 py-3 font-mono text-sm text-white">
              <span>$ {INSTALL_CMD}</span>
              <CopyButton
                text={INSTALL_CMD}
                className="ml-4 border-neutral-600 text-neutral-300 hover:border-white hover:text-white"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center">
          <span>toewser - provider-agnostic AI for ETL and database seeding</span>
        </div>
      </footer>
    </div>
  );
}
