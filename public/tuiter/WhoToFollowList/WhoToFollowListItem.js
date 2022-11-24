function WhoToFollowListItem(who) {
  // {
  //   avatarIcon: '../../images/virgin.png',
  //   userName: 'Virgin Galactic',
  //   handle: 'virgingalactic',
  // }

  return `
  <li class="list-group-item">
  <div class="row align-items-md-center justify-content-md-between">
    <div class="col-lg-2 wd-avatar-container p-0">
      <img
        class="w-100 h-100 rounded-circle wd-avatar-image"
        src="${who.avatarIcon}"
      />
    </div>
    <div class="col-6 col-xl-7 ps-1 pe-0">
      <div class="fw-bolder">
      ${who.userName} <i class="fas fa-check-circle"></i>
      </div>
      <p class="text-secondary mb-0">${who.handle}</p>
    </div>
    <div class="col-xl-3 px-1 wd-follow-btn">
      <button class="btn bg-white fw-bold btn-sm mt-1 rounded-pill">
        Follow
      </button>
    </div>
  </div>
</li>
  `;
}

export default WhoToFollowListItem;
