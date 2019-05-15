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

    :hover {
        cursor: default;
    }
margin: 0;
`;

const DifficultyName = styled(Name)`
    :hover {
      background-color: #a36b6c;
      cursor: pointer;
    }
margin: 0;
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
    margin-left: 1.5em;
`;

const Leader = styled(Button)`
@media (max-width: 525px) {
margin-left: auto;
}
`;

const Loser = styled(Button)`
@media (max-width: 525px) {
margin-right: auto;
}
`;

const Mini = styled.div`
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
      <Mini>
        <Leader onClick={onEasy(uri)}><DifficultyName chosen={difficulty === EASY}>Easy</DifficultyName></Leader>
        <Button onClick={onMedium(uri)}><DifficultyName chosen={difficulty === MEDIUM}>Medium</DifficultyName></Button>
        <Loser onClick={onHard(uri)}><DifficultyName chosen={difficulty === HARD}>Hard</DifficultyName></Loser>
      </Mini>
    </Items>
  </nav>
);

export default Navigation;
