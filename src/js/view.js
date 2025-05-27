export default class cardView {
  dashboardGrid = document.querySelector('.dashboard-grid');

  renderCards(data) {
    const markup = data
      .map(card => {
        const type = card.title.toLowerCase().replace(/\s+/g, '-');
        return `
        <div class="dashboard-card">
          <div class="dashboard-card__bg dashboard-card--${type}"></div>
          <div class="dashboard-card__inner">
            <div class="dashboard-card__top">
              <p class="dashboard-card__title">${card.title}</p>
              <span class="dashboard-card__menu-icon" aria-hidden="true"></span>
            </div>
            <div class="dashboard-card__bottom">
              <p class="dashboard-card__hours">${card.current}hrs</p>
              <p class="dashboard-card__subtitle">Last Week - ${card.previous}hrs</p>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    this.dashboardGrid.innerHTML = markup;
  }
}
