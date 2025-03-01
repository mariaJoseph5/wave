import styled from 'styled-components';

export const MainContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    max-width: initial;
    @media screen and (min-width: 48rem) {
        padding: 3rem;
    }
`;
