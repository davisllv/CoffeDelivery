import styled from "styled-components";

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(19, 15, 15, 0.1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &::before {
    content: "";
    width: 80px;
    height: 80px;
    border: 8px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
