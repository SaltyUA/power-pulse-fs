// Базові кольори і переходи
// Приклад використання в '../components/Button/Button.styled.jsx'

import bgImage from '../assets/images/side-view-people-training-gym.jpg';
export const styleGuide = {
  blackColor: '#040404',
  orangeColor: '#e6533c',
  orange2Color: '#ef8964',
  beigeColor: '#efa082',
  whiteColor: ' #efede8',
  greyTextColor: 'rgba(239, 237, 232, 0.30)',
  successColor: '#3cbf61',
  errorColor: '#d80027',
  navLinkColor: 'rgba(239, 237, 232, 0.20)',
  modalBackgroundColor: 'rgba(4, 4, 4, 0.4)',

  modalTransition: 'scale 300ms linear',
  animation: '250ms cubic-bezier(0.23, 0.86, 0.79, 0.77)',

  backgroundImage: `linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${bgImage})`,
};
