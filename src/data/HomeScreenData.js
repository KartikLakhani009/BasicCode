import AppStyle from '../config/AppStyle';

export const HomeButtons = [
  {
    id: 301,
    title: 'To Do Items',
    iconName: 'pencil', //here only named allow Vector Icon
    navigate: 'Home',
    iconSource: 'FontAwesome',
    bgColor: AppStyle.COLOR.BLUE_BRIGHT,
  },
  {
    id: 302,
    title: 'Trade Requests',
    iconName: 'line-chart',
    navigate: 'Home',
    iconSource: 'FontAwesome',
    bgColor: AppStyle.COLOR.PURPLE,
  },
  {
    id: 303,
    title: 'Form Submissions',
    iconName: 'tasks',
    navigate: 'Home',
    iconSource: 'FontAwesome',
    bgColor: AppStyle.COLOR.YELLOW_RATING,
  },
  {
    id: 304,
    title: 'G&E Disclosures',
    iconName: 'diamond',
    navigate: 'Home',
    iconSource: 'FontAwesome',
    bgColor: AppStyle.COLOR.ORANGE_OUTRAGEOUS,
  },
  {
    id: 305,
    title: 'Report Incident',
    iconName: 'compass',
    navigate: 'Home',
    iconSource: 'FontAwesome',
    bgColor: AppStyle.COLOR.COFFEE,
  },
];
