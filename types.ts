export enum PageView {
  HOME = 'HOME',
  PRIVACY = 'PRIVACY'
}

export interface NavigationProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}