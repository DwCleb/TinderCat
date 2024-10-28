import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components/native';
import {sizes, colors, MappedCat} from '../utils.ts';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: sizes.m,
    justifyContent: 'flex-end',
    shadowColor: '#BFBFC0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

const CardWrapper = styled.View`
    background-color: ${colors.white_polar};
    top: ${sizes.xl}px;
    width: 100%;
    height: 446px;
    border-radius: ${sizes.m}px;
    position: absolute;
`;


const DescriptionWrapper = styled.View`
    margin-horizontal: ${sizes.m}px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-horizontal: ${sizes.m}px;
    padding-vertical:${sizes.s}px;
    background-color: ${colors.white};
    border-top-left-radius: ${sizes.m}px;
    border-top-right-radius: ${sizes.m}px;
`;

const TitleName = styled.Text`
    color: ${colors.black_text};
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
`;

const CaptionName =styled.Text`
    color: ${colors.grey_text};
    font-size: ${sizes.s}px;
    line-height: 10px;
    font-weight: 700;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

interface CardProps {
  data: MappedCat;
  onSwipe: (direction: string) => void;
  onCardLeftScreen: (direction: 'left' | 'right') => void;
}

const Card = ({ data, onSwipe, onCardLeftScreen }: CardProps) => {
  return (
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} swipeRequirementType="position">
      <CardWrapper>
        <ImageBackground
          source={{uri: data?.url}}
          style={styles.image}
        >
          <DescriptionWrapper>
            <Row>
              <TitleName>{data.name}</TitleName>
              <TitleName>{data.affectionLevel}</TitleName>
            </Row>
            <CaptionName>{data.origin}</CaptionName>
          </DescriptionWrapper>
        </ImageBackground>
      </CardWrapper>
    </TinderCard>
  );
};

export default Card;
