// const handleEventTarget = (event) => {
//   const target = event.target;
//   console.log(target);
//   $(target).css('background-color', 'blue').css('color', 'white');
// };
const NavigationSidebar = (active) => {
  return `
  <ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <a class="d-block text-reset" href="#"
      ><i class="fa-solid fa-t pe-2"></i
    ></a>
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="../HomeScreen/index.html">
      <i class="fas fa-home pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items ${
        active == 'home' ? 'fw-bolder' : ''
      }">Home</span></a
    >
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="../explore/index.html">
      <i class="fas fa-hashtag pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items ${
        active == 'explore' ? 'fw-bolder' : ''
      }">Explore</span>
    </a>
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fas fa-bell pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">Notifications</span></a
    >
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fas fa-envelope pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">Messages</span></a
    >
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fas fa-bookmark pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">Bookmarks</span></a
    >
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fas fa-list pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">Lists</span></a
    >
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fas fa-user pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">Profile</span>
    </a>
  </li>
  <li class="list-group-item">
    <a class="d-block text-reset text-decoration-none" href="#">
      <i class="fa fa-ellipsis-h pe-2"></i>
      <span class="d-none d-xl-inline-block wd-nav-items">More</span></a
    >
  </li>
</ul>
<button
  class="btn btn-primary w-100 fw-bold btn-sm rounded-pill mt-3 wd-tweet-btn px-2"
>
  Tweet
</button>
`;
};

export default NavigationSidebar;
