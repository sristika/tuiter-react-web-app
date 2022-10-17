import NavigationSidebar from '../NavigationSidebar/index.js';
import WhoToFollowList from '../WhoToFollowList/index.js';
import ExploreComponent from './ExploreComponent.js';

function exploreComponent() {
  $('#wd-explore').append(`
    <div class="container"> 
    <div class="row">
    <div class="col-xl-2 col-lg-1 col-2">
    ${NavigationSidebar('explore')}
    </div>
    <div class="col-xl-6 col-lg-7 col-10 wd-middle-content-wrap p-0">
      ${ExploreComponent()}
    </div>
    <div class="col-lg-4 ps-3 mt-3 d-none d-lg-block">
      ${WhoToFollowList()}
      <div class="wd-footer-right mt-2 px-2">
        <a href="#" class="wd-faded-text text-secondary d-inline-block px-1"
          >Terms of service</a
        >
        <a href="#" class="wd-faded-text text-secondary d-inline-block px-1"
          >Privacy Policy</a
        >
        <a href="#" class="wd-faded-text text-secondary d-inline-block px-1"
          >Cookie Policy</a
        >
        <br />
        <a href="#" class="wd-faded-text text-secondary d-inline-block px-1"
          >Ads Info</a
        >
        <a href="#" class="wd-faded-text text-secondary d-inline-block px-1"
          >More...</a
        >
        <span class="wd-faded-text text-secondary d-inline-block px-1"
          >&copy; 2022 Tuiter, Inc.</span
        >
      </div>
    </div>
  </div>
    </div>
  `);
}

$(exploreComponent);
