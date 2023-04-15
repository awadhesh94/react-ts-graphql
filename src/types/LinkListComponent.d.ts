export interface dataProps {
  loading?: boolean;
  data?: FeedProps;
}

export interface FeedProps {
  id?: string;
  feed?: LinkListProps;
}

export interface LinkListProps {
  links?: LinkProps[];
}

export interface LinkProps {
  index?: number;
  id?: string;
  createdAt?: string;
  description?: string;
  url?: string;
  postedBy?: PostedByProps;
  votes?: VotesProps[];
}

export interface PostedByProps {
  id?;
  string;
  name?: string;
}

export interface VotesProps {
  id?: string;
}
