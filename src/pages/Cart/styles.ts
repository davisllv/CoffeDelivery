import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  margin-top: 2.5rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.875rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const BaseContainerCard = styled.section`
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const FormContainerValues = styled(BaseContainerCard)`
  display: flex;
  align-items: flex-start;

  flex-direction: column;

  gap: 2rem;

  .form-container-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100%;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.75rem;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-text"]};
      text-transform: uppercase;
      background: ${(props) => props.theme["base-button"]};
      border: none;
      border-radius: 6px;
      padding: 1rem;
      flex: 1;

      &:hover {
        background: ${(props) => props.theme["base-hover"]};
      }

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }

  .form-container-inputs {
  }
`;

export const ContainerText = styled.div`
  display: flex;
  gap: 0.5rem;

  align-items: flex-start;

  .map-pin-icon {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .dollar-icon {
    color: ${(props) => props.theme.purple};
  }

  div {
    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
    }
  }
`;

export const ContainerInputs = styled.div``;

export const ListShopContainer = styled(BaseContainerCard)`
  display: flex;
  flex-direction: column;
  width: 28rem;

  .coffe-item {
    display: flex;
    flex-direction: column;

    .coffe-info-container {
      display: flex;
      gap: 3rem;
      .coffe-description {
        display: flex;
        gap: 1.25rem;

        img {
          width: 4rem;
          height: 4rem;
        }

        .coffe-information {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: ${(props) => props.theme["base-subtitle"]};

          .coffe-actions-buttons {
            display: flex;
            gap: 0.5rem;
            flex: 1;

            button {
              display: flex;
              gap: 0.25rem;
              background: ${(props) => props.theme["base-button"]};
              border-radius: 6px;
              border: 0;
              align-items: center;
              padding: 0.25rem 0.5rem;

              color: ${(props) => props.theme["base-text"]};
              font-size: 0.75rem;

              svg {
                color: ${(props) => props.theme.purple};
              }
            }
          }
        }
      }

      .coffe-values {
        font-weight: bold;
        color: ${(props) => props.theme["base-text"]};
      }
    }

    &::after {
      content: "";
      margin: 1.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    }
  }
`;

export const InfoShopContainer = styled.div``;
