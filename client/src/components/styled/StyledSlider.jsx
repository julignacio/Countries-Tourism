import styled from "styled-components";

export const StyledSlider = styled.div`
  position: relative;
  overflow: hidden;

  @keyframes fade {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }

  .slides {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .slide {
    position: relative;
    left: -1vw;
    height: 93vh;
    width: 101vw;
    animation-name: fade;
    animation-duration: 2.5s;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: blur(2px);
    }

    span {
      position: absolute;
      top: 39%;
      background: rgba(180, 220, 255, 0.2);
      left: 0;
      width: 100%;
      padding: 5px;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 2.5rem;
      text-shadow: 1px 1px 2px black;
    }
  }

  .buttons {
    position: absolute;
    top: 40%;
    width: 100%;
  }

  .next {
    font-size: 2rem;
    right: 0;
    position: absolute;
    cursor: pointer;
    width: 50px;
    text-align: center;

    &:hover {
      color: hsl(0, 0%, 93%);
    }
  }

  .prev {
    font-size: 2rem;
    left: 0;
    position: absolute;
    cursor: pointer;
    width: 50px;
    text-align: center;

    &:hover {
      color: hsl(0, 0%, 93%);
    }
  }
`;
