import '../gesture-handler';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {useColorScheme} from 'react-native';

export const ProdcutsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backgroundColor =
    colorScheme === 'dark'
      ? theme['color-basic-800']
      : theme['color-basic-100'];

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-basic-100'],
              text: theme['color-basic-200'],
              border: theme['color-basic-800'],
              notification: theme['color-basic-500'],
            },
            fonts: {
              regular: {fontFamily: 'System', fontWeight: 'normal'},
              medium: {fontFamily: 'System', fontWeight: '500'},
              bold: {fontFamily: 'System', fontWeight: 'bold'},
              heavy: {fontFamily: 'System', fontWeight: '900'},
            },
          }}>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
