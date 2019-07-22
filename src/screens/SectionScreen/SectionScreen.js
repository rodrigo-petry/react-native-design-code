import React, { useEffect } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import * as Icon from '@expo/vector-icons';
import Markdown from 'react-native-showdown';

export default function SectionScreen({ navigation }) {
  const section = navigation.getParam('section');
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    return () => {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  return (
    <ScrollView>
      <Container>
        <Cover>
          <Hero source={{ uri: section.image.url }} />
          <Wrapper>
            <Logo source={{ uri: section.logo.url }} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
        </CloseButton>
        <Content>
          <Markdown body={section.content} pureCSS={htmlStyles} scalesPageToFit={false} scrollEnabled={false} />
        </Content>
      </Container>
    </ScrollView>
  );
}

SectionScreen.navigationOptions = {
  header: null,
};

const htmlStyles = `
  * {
    font-family: -apple-system;
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: normal;
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  img {
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
  }

  strong {
    font-weight: 700;
  }

  pre {
    padding: 20px;
    background: #212C4F;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 10px;
      margin-top: 20px;
  }

  code {
    color: white;
  }
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Hero = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 48px;
  left: 20px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-left: 6px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseButton = styled(RectButton)`
  background: white;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  elevation: 15;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 20px;
`;

const Content = styled.View`
  height: 1000px;
  padding: 12px;
`;