import { styled } from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const CardContainer = styled.div`
  padding: 1.25rem;
  margin-top: 3.5rem;

  max-width: 16rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: -3rem;
  span {
    border-radius: 100px;
    background: ${(props) => props.theme["yellow-light"]};

    font-size: 0.625rem;
    font-weight: bold;

    color: ${(props) => props.theme["yellow-dark"]};

    padding: 0.25rem 0.5rem;
  }
`;

export const CardTagContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0.25rem;
`;

export const CardTextsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem;

  .coffe-name {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .coffe-description {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
  }
`;

export const CardButtonContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;

  padding: 0.25rem 0;

  gap: 1.375rem;
  color: ${(props) => props.theme["base-text"]};
  p {
    span {
      font-size: 0.875rem;
      font-weight: 400;
    }
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
  }
`;

export const CardInputGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  .shopping-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme["base-card"]};
    background: ${(props) => props.theme["purple-dark"]};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`;
