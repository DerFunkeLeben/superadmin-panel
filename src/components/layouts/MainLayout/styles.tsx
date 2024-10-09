import styled from 'styled-components';

export const MainLayoutStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'h h' 'n c';
  min-height: 100vh;
  background: var(--app-brand-50);
  --header-height: 72px;
`;

export const Header = styled.div`
  display: flex;
  grid-area: h;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  height: var(--header-height);
  box-sizing: border-box;
  background: var(--app-brand-500);
`;
export const HeaderTitle = styled.div`
  font-family: 'Inter', 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  margin-left: 16px;
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  grid-area: c;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 32px 24px;
  background: var(--app-brand-50);
  max-height: calc(100vh - var(--header-height));
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export type ContentTableWrapProps = {
  $isActive?: boolean;
};

export const ContentTableWrap = styled.div<ContentTableWrapProps>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
`;
