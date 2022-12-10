export default interface IGitHub {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  pinnedItems: PinnedItems;
}

export interface PinnedItems {
  totalCount: number;
  edges:      Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  name:            string;
  primaryLanguage: PrimaryLanguage;
  url:             string;
  description:     string;
  homepageUrl:     string;
}

export interface PrimaryLanguage {
  name:  string;
  color: string;
}
