import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
  return `
  <div class="row mb-2 px-2 bg-transparent mt-2">
  <div class="col-11 position-relative bg-transparent">
    <input
      class="ps-5 form-control rounded-pill"
      placeholder="Search Tuiter"
    />
    <span class="position-absolute wb-search-magnifier">
      <i class="fas fa-search"> </i
    ></span>
  </div>
  <div class="col-1 p-0 bg-transparent">
    <a href="explore-settings.html">
      <i
        class="fa fa-cog wd-cog position-relative"
        aria-hidden="true"
      ></i>
    </a>
  </div>
</div>
<ul class="nav nav-tabs">
  <li class="nav-item wd-active">
    <a class="nav-link active fw-bold" href="for-you.html">For You</a>
    <div class="wd-underline"></div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="trending.html">Trending</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="news.html">News</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="sports.html">Sports</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="entertainment.html">Entertainment</a>
  </li>
</ul>
<div class="w-100 position-relative mt-1">
  <img class="w-100" src="images/Starship-Mk1-Day.webp" />
  <h1 class="position-absolute bottom-0 wd-spaceX-text text-white">
    SpaceX's Starship
  </h1>
</div>
${PostSummaryList()}
  `;
};
export default ExploreComponent;
