import { css } from 'react-emotion';

export const viewBox = css`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

export const slider = css`
  display: flex;
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  transition-property: left;
  & > li {
    height: 100%;
    list-style: none;
  }
  & img {
    height:100%;
    object-fit: cover;
  }
`;

const arrow = css`
  position: absolute;
  top: 50%;
  z-index: 5; // 控制层数
  &:hover {
    background: rgba(0,0,0, .2);
  }
`;
export const arrowLeft = css(
  {
    left: 0
  },
  arrow
);
export const arrowRight = css(
  {
    right: 0
  },
  arrow
);

export const dotsWrapper = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 5;
  & > span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 3px solid #ccc;
    margin: 6px;
    cursor: pointer;
    border-radius: 20px;
    
    &:hover {
      border: 3px solid #868686;
    }
    &.selected-dot {
      background: #ccc;
    }
  }
`;