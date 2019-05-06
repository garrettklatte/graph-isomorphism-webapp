import React from 'react';
import styled from 'styled-components';

import {EASY, MEDIUM, HARD} from '../actions';

const Items = styled.ul`
    display: flex;
    padding-left: 0;
    list-style-type: none;
`;

const Name = styled.p`
    display: block;
    padding: 0.5em 1em;
    background-color: ${props => props.chosen ? "LightBlue": "Orange"};
    color: white;
    border-radius: 2px;
    text-decoration: none;

    :hover {
        cursor: default;
    }
`;

const DifficultyName = styled(Name)`
    :hover {
      background-color: red;
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

const Navigation = ({difficulty, onEasy, onMedium, onHard}) => (
  <nav>
    <Items>
      <Title><Name>Graph Isomorphism</Name></Title>
      <Button onClick={onEasy}><DifficultyName chosen={difficulty === EASY}>Easy</DifficultyName></Button>
      <Button onClick={onMedium}><DifficultyName chosen={difficulty === MEDIUM}>Medium</DifficultyName></Button>
      <Button onClick={onHard}><DifficultyName chosen={difficulty === HARD}>Hard</DifficultyName></Button>
    </Items>
  </nav>
);

export default Navigation;
