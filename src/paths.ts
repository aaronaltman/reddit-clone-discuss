export const paths = {
  home() {
    return "/";
  },
  topicShow(topicId: string) {
    return `/topics/${topicId}`;
  },
  postCreate(topicslug: string) {
    return `/topics/${topicslug}/posts/create`;
  },
  postShow(topicslug: string, postId: string) {
    return `/topics/${topicslug}/posts/${postId}`;
  },
};
