import { htmlToElement } from './template-tools.js';

function showVoterInList(stopsToShow, stopList) {
  stopList.innerHTML = '';

  for (const stop of stopsToShow) {
    const html = `
      <li class="stop-list-item" id=${stop['0']}> ${stop['3']} ${stop['2']} </li>
    `;
    const li = htmlToElement(html);
    stopList.append(li);
  }
}

export {
    showVoterInList,
};