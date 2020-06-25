import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

const User = ({ navigation, route }) => {
  const user = route.params?.user;
  const [stars, setStars] = useState();

  useEffect(() => {
    const getStars = async () => {
      const response = await api.get(`/users/${user.login}/starred`);

      setStars(response.data);
    };

    getStars();
  }, [user]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
    });
  }, [navigation, user]);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <Stars
        data={stars}
        keyExtractor={(star) => String(star.id)}
        renderItem={({ item }) => (
          <Starred>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
    </Container>
  );
};

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};

export default User;
