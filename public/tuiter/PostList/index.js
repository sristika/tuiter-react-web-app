import posts from './posts.js';
import PostItem from './PostItem.js';

const PostList = () => {
  return `
  <div class="list-group wd-middle-content wd-side-borders">
  ${posts
    .map((post) => {
      return PostItem(post);
    })
    .join(' ')}
  </div>
  `;
};

export default PostList;
