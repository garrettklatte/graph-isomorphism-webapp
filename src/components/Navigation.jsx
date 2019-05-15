import React from 'react';
import styled from 'styled-components';

import { EASY, MEDIUM, HARD } from '../actions';

const Items = styled.ul`
    flex-direction: column;
    @media (min-width: 525px) {
        flex-direction: row;
    }
    display: flex;
    padding-left: 0;
    list-style-type: none;
    margin-top: 2em;
`;

const Name = styled.p`
    display: block;
    padding: 0.5em 1em;
    background-color: ${props => (props.chosen ? '#c78283' : '#9db5b2')};
    color: white;
    border-radius: 2px;
    text-decoration: none;
    margin: 0;

    :hover {
        cursor: default;
    }
`;

const DifficultyName = styled(Name)`
    margin: 0;

    :hover {
        background-color: #a36b6c;
        cursor: pointer;
    }
`;

const ListItem = styled.li`
    margin-top: 0;
`;

const Title = styled(ListItem)`
    margin: 0 auto;
    @media (min-width: 525px) {
        margin-left: 0;
        margin-right: auto;
    }
`;

const Button = styled(ListItem)`
    margin-left: ${props => (props.left ? 'auto' : '0.75em')};
    margin-right: ${props => (props.right ? 'auto' : '0.75em')};
    @media (min-width: 525px) {
        margin-left: 1.5em;
        margin-right: 0;
    }
`;

const Difficulties = styled.div`
    display: flex;
    margin-top: 1em;
    @media (min-width: 525px) {
        margin-top: 0;
    }
`;

const Navigation = ({
  difficulty, uri, onEasy, onMedium, onHard,
}) => (
  <nav>
    <Items>
      <Title><Name>Graph Isomorphism</Name></Title>
      <Difficulties>
        <Button left onClick={onEasy(uri)}><DifficultyName chosen={difficulty === EASY}>Easy</DifficultyName></Button>
        <Button onClick={onMedium(uri)}><DifficultyName chosen={difficulty === MEDIUM}>Medium</DifficultyName></Button>
        <Button right onClick={onHard(uri)}><DifficultyName chosen={difficulty === HARD}>Hard</DifficultyName></Button>
      </Difficulties>
    </Items>
  </nav>
);

export default Navigation;
