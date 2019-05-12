import React from 'react';
import styled from 'styled-components';

import { EASY, MEDIUM, HARD } from '../actions';

const Items = styled.ul`
    display: flex;
    padding-left: 0;
    list-style-type: none;
`;

const Name = styled.p`
    display: block;
    padding: 0.5em 1em;
    background-color: ${props => (props.chosen ? '#c78283' : '#9db5b2')};
    color: white;
    border-radius: 2px;
    text-decoration: none;

    :hover {
        cursor: default;
    }
`;

const DifficultyName = styled(Name)`
    :hover {
      background-color: #a36b6c;
      cursor: pointer;
    }
`;

const ListItem = styled.li`
    margin-top: 0;
`;

const Title = styled(ListItem)`
    margin-right: auto;
`;

const Button = styled(ListItem)`
    margin-left: 1.5em;
`;

const Navigation = ({
  difficulty, uri, onEasy, onMedium, onHard,
}) => (
  <nav>
    <Items>
      <Title><Name>Graph Isomorphism</Name></Title>
      <Button onClick={onEasy(uri)}><DifficultyName chosen={difficulty === EASY}>Easy</DifficultyName></Button>
      <Button onClick={onMedium(uri)}><DifficultyName chosen={difficulty === MEDIUM}>Medium</DifficultyName></Button>
      <Button onClick={onHard(uri)}><DifficultyName chosen={difficulty === HARD}>Hard</DifficultyName></Button>
    </Items>
  </nav>
);

export default Navigation;
