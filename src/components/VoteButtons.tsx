import React from 'react';
import styled from 'styled-components/native';
import Cross from '../assets/Cross.tsx';
import {sizes} from '../utils.ts';
import Like from '../assets/Like.tsx';

const Container = styled.View`
    flex-direction: row;
`;

const Button = styled.Pressable`
    width: ${sizes.button}px;
    height: ${sizes.button}px;
    border-radius: ${sizes.button}px;
    align-items: center;
    justify-content: center;
    background-color: white;
    shadow-color: #000;
    shadow-opacity: 0.3;
    shadow-radius: ${sizes.xxs}px;
    margin-horizontal: ${sizes.l}px;
`;

interface VoteButtonsProps {
  onLike: () => void;
  onUnlike: () => void;
}

const VoteButtons = ({ onLike, onUnlike}: VoteButtonsProps) => {
  return (
    <Container>
      <Button onPress={() => onUnlike()}>
        <Cross/>
      </Button>
      <Button onPress={() => onLike()}>
        <Like/>
      </Button>
    </Container>
  );
};

export default VoteButtons;
