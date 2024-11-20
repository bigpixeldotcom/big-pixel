declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

type Client = {
  companyName: string;
  _updatedAt: string;
  icon: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  projects: Array<Project>;
};

type Project = {
  _key: string;
  linearProjectId: string;
  title: string;
  updates: Array<Update>;
};

type Update = {
  _key?: string;
  title: string;
  tasks: Array<Task>;
};

type Task = {
  _key: string;
  title: string;
  status: string; // e.g., "completed", "delayed", "inProgress"
  description: Array<BlockContent>;
};

type BlockContent = {
  _type: string; // e.g., "block"
  style: string; // e.g., "normal"
  _key: string;
  markDefs: Array<any>; // Array of mark definitions (can define more specifically if needed)
  children: Array<SpanContent>;
};

type SpanContent = {
  _type: string; // e.g., "span"
  _key: string;
  marks: Array<string>; // Array of marks (if any)
  text: string;
};