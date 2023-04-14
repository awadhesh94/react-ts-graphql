export interface dataProps {
  loading?: boolean;
  data?: FeedProps;
}

export interface FeedProps {
  id?;
  string;
  feed?: LinkListProps;
}

export interface LinkListProps {
  links: LinkProps[];
}

export interface LinkProps {
  id?: string;
  createdAt?: string;
  description?: string;
  url?: string;
}
