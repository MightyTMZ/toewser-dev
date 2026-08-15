"use client"

import { PROVIDERS, PROVIDERS_LIST_MAP } from "../data/constants"
import { useState } from "react"
import CopyButton from "./CopyButton"

const getRandomProvider = () => {
  const randomIndex = Math.floor(Math.random() * PROVIDERS.length)
  return PROVIDERS[randomIndex]
}

const getRandomModel = (provider: string) => {
  const providerData = PROVIDERS.find(p => p.valueOf() === provider)

  if (providerData) {
    const key = provider.toLowerCase() as keyof typeof PROVIDERS_LIST_MAP
    const models = PROVIDERS_LIST_MAP[key]

    const randomIndex = Math.floor(Math.random() * models.length)

    return `${provider}/${models[randomIndex]}`
  }

  return "anthropic/claude-fable-5"
}

const buildSnippet = (model: string) => `from toewser.core import Toewser
import os

toewser = Toewser(
    model="${model}",
    model_api_key=os.environ.get("API_KEY"),
    db_client=bigquery_client,
)
toewser.populate(prompt=prompt, table_name="trivia.questions", rows=1500)`

const DemoSnippet = () => {
  const [model, setModel] = useState("anthropic/claude-fable-5")

  const handleNewModel = () => {
    setModel(getRandomModel(getRandomProvider()))
  }

  return (
    <div className="border border-neutral-200 bg-neutral-50">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2">
        <span className="font-mono text-xs text-neutral-500">seed.py</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleNewModel}
            className="shrink-0 border border-neutral-300 px-3 py-1.5 text-xs font-medium tracking-wide text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Use another model
          </button>
          <CopyButton text={buildSnippet(model)} />
        </div>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-sm leading-7 text-neutral-800">
        <span className="text-blue-600">from</span>
        {" toewser.core "}
        <span className="text-blue-600">import</span>
        {" Toewser\n"}
        <span className="text-blue-600">import</span>
        {" os"}
        {"\n\n"}
        {"seed_prompt = "}
        <span className="text-emerald-600">
        {"\"\"\""}
        {"\n"}
        {"Generate trivia questions on the geography of the world."}
        {"The schema of each row is:\n- question: string\n- answer: string\n- difficulty: one of \"easy\", \"medium\", or \"hard\"\n\nQuestions should be factually correct, diverse, and avoid duplicates."}
        {"\n"}
        {"\"\"\""}
        </span>
        {"\n\n"}
        {"toewser = "}
        <span className="text-neutral-900 font-medium">Toewser</span>
        {"(\n    model="}
        <span className="text-red-600">&quot;{model}&quot;</span>
        {",\n    model_api_key=os.environ.get("}
        <span className="text-red-600">&quot;YOUR_API_KEY&quot;</span>
        {"),\n    db_client=bigquery_client,\n)\n"}
        {"toewser."}
        <span className="text-blue-900">{"populate"}</span>
        {"(prompt=seed_prompt, table_name="}
        <span className="text-red-600">&quot;trivia.questions&quot;</span>
        {", rows="}
        <span className="text-green-700">{"1500"}</span>
        {")"}
      </pre>
    </div>
  )
}

export default DemoSnippet
