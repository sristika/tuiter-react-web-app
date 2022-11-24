const PostSummaryItem = (post) => {
  return `
  <li class="list-group-item">
  <div class="row pb-2">
    <div class="col-10">
      <span class="d-block text-secondary">${post.topic}</span>
      <span class="fw-bolder d-inline">${post.userName}</span>
      <i class="fas fa-check-circle"></i>
      <span class="text-secondary">- ${post.time}</span>
      <p class="fw-bolder mb-0">
      ${post.title}
      </p>
    </div>
    <div class="col-2 d-flex align-items-center">
      <img
        class="rounded wd-avatar-image w-100"
        src="${post.image}"
      />
    </div>
  </div>
</li>
  `;
};

export default PostSummaryItem;
