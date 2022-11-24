const PostItem = (post) => {
  return `
  <div class="wd-bookmark wd-border-bottom-1px">
        <img class="wd-bookmark-avatar rounded-circle" src="${post.avatarImg}">
        <div class="wd-bookmark-right">
          <h2 class="wd-bookmark-author">${post.author}</h2>
          <i class="fas fa-check-circle"></i>
          <span class="wd-bookmark-author-handle">${post.handle} - </span>
          <span class="wd-bookmark-author-date">${post.time}</span>
          <a href="#" class="wd-readmorebookmarks-dots"><img src="../explore/icons/menu (1).png"></a>
          <p class="mt-0">
          ${post.comment}
          </p>
          <div class="wd-bookmark-box-content">
            <img src="${post.image}" class="wd-border-bottom-1px ${
    post.contentheading && post.content ? '' : 'wd-rounded-corners'
  }">
            ${
              post.contentheading && post.content
                ? `            <div class="wd-box-writing">
            <h2 class="wd-box-head">
            ${post.contentheading}
            </h2>
            <p class="wd-box-content">
            ${post.content}
            </p>
          </div>`
                : ``
            }

          </div>
          <div class="wd-icon-footer">
            <a href="#" class="wd-icon-container">
              <img width="15px" src="../images/message-2-xxl.png">
              <span>${post.commentsNums}</span>
            </a>
            <a href="#" class="wd-icon-container">
              <img width="15px" src="../images/refresh-xxl.png">
              <span>${post.shareNums}</span>
            </a>
            <a href="#" class="wd-icon-container active">
              <img src="../images/icons8-heart-48.png" width="15px">
              <span>${post.likeNums}</span>
            </a>
            <a href="#" class="wd-icon-container">
              <img width="15px" src="../images/upload-3-xxl.png">
            </a>
          </div>
        </div>
      </div>
  `;
};

export default PostItem;
