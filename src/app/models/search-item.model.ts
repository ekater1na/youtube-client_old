export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: { [key: string]: string };
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailItem;
    medium: ThumbnailItem;
    high: ThumbnailItem;
    standard: ThumbnailItem;
    maxres: ThumbnailItem;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}
