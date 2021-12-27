import { FunctionComponent, ReactNode } from "react";

declare module "react-twitter-widgets" {
  export type onLoad = () => any;
  export type renderError = (error: Error) => ReactNode;

  export interface FollowProps {
    className?: string;
    username: string;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Follow: FunctionComponent<FollowProps>;

  export interface HashtagProps {
    className?: string;
    hashtag: string;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Hashtag: FunctionComponent<HashtagProps>;

  export interface MentionProps {
    className?: string;
    username: string;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Mention: FunctionComponent<MentionProps>;

  export interface ShareProps {
    className?: string;
    url: string;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Share: FunctionComponent<ShareProps>;

  export interface TimelineProps {
    className?: string;
    dataSource: object;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Timeline: FunctionComponent<TimelineProps>;

  export interface TweetProps {
    className?: string;
    tweetId: string;
    options?: Object;
    onLoad?: onLoad;
    renderError?: renderError;
  }
  export const Tweet: FunctionComponent<TweetProps>;
}
