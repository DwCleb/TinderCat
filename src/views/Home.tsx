import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';

import Card from '../components/Card.tsx';
import Skeleton from '../components/Skeleton.tsx';
import Switch from '../components/Switch.tsx';
import {MappedCat, colors, sizes, GAME_TYPE} from '../utils.ts';
import useRequest from '../api/useRequest.ts';
import VoteButtons from '../components/VoteButtons.tsx';

const SafeContainer = styled(SafeAreaView)`
    flex: 1;
    justify-content: flex-start;
    width: 100%;
    padding-horizontal: ${sizes.m}px;
    background-color: ${colors.background};
`;

const PageContent = styled.View`
    width: 100%;
    padding-horizontal: ${sizes.m}px;
`;

const SwitchContainer = styled.View`
    align-items: center;
    margin-top: ${sizes.m}px;
`;

const ButtonsContainer = styled.View`
    align-items: center;
    justify-content: center;
    align-self: center;
    position: absolute;
    bottom: 105px;
`;

function HomeScreen(): React.JSX.Element {
  const [data, setData] = useState<MappedCat[]>([]);
  const [loading, setLoading] = useState(true);
  const [gameView, setGameView] = useState(GAME_TYPE.LIKE);
  const { getCatProfiles, addingCatVoting } = useRequest();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const cats = await getCatProfiles();
    setData(cats);
    setLoading(false);
  }, [getCatProfiles]);

  const onSwipe = async (direction: string) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = async (catId: string, direction: 'left' | 'right') => {
    console.log(catId + ' left the screen');
    if(direction === 'left') {
      return;
    }
    await addingCatVoting(catId);
  };

  const swipe = (direction: string) => {
    console.log('You swiped: ' + direction);
    setData(previous =>
      previous
        .filter((c,index) =>
          index !== data.length - 1));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <SafeContainer>
      <PageContent>
        <SwitchContainer>
          <Switch value={gameView} onValueChange={(value) => setGameView(value)}/>
        </SwitchContainer>
        {loading ? (
          <Skeleton
            position={'absolute'}
            top={sizes.xl}
            width={'100%'}
            height={sizes.cardHeight}
            borderRadius={sizes.m}
          />)
          :
          data?.map((cat) => {
            return (
              <Card
                key={cat.id}
                data={cat}
                onSwipe={onSwipe}
                onCardLeftScreen={(direction) => onCardLeftScreen(cat.id, direction)}/>
          );
          })
        }
      </PageContent>
      <ButtonsContainer>
        <VoteButtons
          onLike={() => swipe('right')}
          onUnlike={() => swipe('left')}/>
      </ButtonsContainer>
    </SafeContainer>
  );
}

export default HomeScreen;
