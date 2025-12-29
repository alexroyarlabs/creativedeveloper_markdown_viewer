import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TabButton from "../../components/TabButton";
import StatusBanner from "../../components/StatusBanner";

const SECTIONS = [
  { key: "idea", label: "IDEA" },
  { key: "mvp", label: "MVP" },
  { key: "frontendInstructions", label: "FRONTEND_INSTRUCTIONS" },
  { key: "backendInstructions", label: "BACKEND_INSTRUCTIONS" },
];

const EMPTY_CONTENT = {
  idea: null,
  mvp: null,
  frontendInstructions: null,
  backendInstructions: null,
};

const getApiBase = () =>
  import.meta.env.VITE_API_BASE || import.meta.env.VITE_API_BASE_URL || "";

const buildEndpoint = (projectId) => {
  const base = getApiBase().replace(/\/$/, "");
  if (!base) {
    return `/projects/${encodeURIComponent(projectId)}`;
  }
  return `${base}/projects/${encodeURIComponent(projectId)}`;
};

const ProjectPage = () => {
  const { projectId: pathId } = useParams();
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get("projectId");
  const projectId = pathId || queryId || "";

  const [activeTab, setActiveTab] = useState(SECTIONS[0].key);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [content, setContent] = useState(EMPTY_CONTENT);

  const endpoint = useMemo(
    () => (projectId ? buildEndpoint(projectId) : ""),
    [projectId]
  );

  useEffect(() => {
    if (!projectId) {
      setStatus("idle");
      setError("");
      setContent(EMPTY_CONTENT);
      return;
    }

    const controller = new AbortController();
    const load = async () => {
      setStatus("loading");
      setError("");
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Request failed (${response.status}).`);
        }
        const payload = await response.json();
        setContent({ ...EMPTY_CONTENT, ...payload });
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setStatus("error");
        setError(err.message || "Unable to load project content.");
      }
    };

    load();
    return () => controller.abort();
  }, [endpoint, projectId]);

  const activeSection = SECTIONS.find((section) => section.key === activeTab);
  const activeContent = activeSection ? content[activeSection.key] : null;
  const isContentEmpty =
    !activeContent || (typeof activeContent === "string" && !activeContent.trim());

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <section className="flex flex-col gap-4">
        {!projectId && (
          <StatusBanner
            tone="info"
            title="Project ID required"
            description="Provide a projectId in the URL path `/projects/:projectId` or as a query parameter `?projectId=`."
          />
        )}
        {status === "loading" && (
          <StatusBanner
            tone="info"
            title="Loading content"
            description="Fetching the latest markdown from DynamoDB."
          />
        )}
        {status === "error" && (
          <StatusBanner
            tone="error"
            title="Unable to load content"
            description={error}
          />
        )}
      </section>

      <section className="reveal rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/5 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3" role="tablist">
          {SECTIONS.map((section) => (
            <TabButton
              key={section.key}
              label={section.label}
              isActive={activeTab === section.key}
              onClick={() => setActiveTab(section.key)}
            />
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-inner">
          <div role="tabpanel" aria-labelledby={activeSection?.label}>
            {isContentEmpty ? (
              <p className="text-sm text-[var(--ink-muted)]">
                Content not available.
              </p>
            ) : (
              <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
                {activeContent}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
