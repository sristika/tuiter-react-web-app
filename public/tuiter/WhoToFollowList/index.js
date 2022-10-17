import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
  return `
    <ul class="list-group wd-list-bg-color wd-right-block">
    <li class="list-group-item fw-bolder">Who to follow</li>
      ${who
        .map((person) => {
          return WhoToFollowListItem(person);
        })
        .join('')}
    </ul>
  `;
};

export default WhoToFollowList;
