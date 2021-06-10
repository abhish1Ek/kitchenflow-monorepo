import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Body from 'native/typography/Body';
import Subtitle from 'native/typography/Subtitle';
import LayoutStyles from 'native/layouts/ScreenContainer/styles';
import BottomActionBar from 'native/components/BottomActionBar';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import { View } from 'react-native';

interface IContentContainer {
  title?: string;
  description?: string;
  submitLabel?: string;
}

const ContentContainer: React.FC<IContentContainer> = props => {
  const { title, description, children, submitLabel } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.headerView}>
          {title && <Subtitle>{title}</Subtitle>}
          {description && <Body>{description}</Body>}
        </View>

        {children}
      </ScrollView>
      <BottomActionBar>
        <FormSubmitButton>{submitLabel}</FormSubmitButton>
      </BottomActionBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 20,
  },
  scroll: {
    flexGrow: 1,
    ...LayoutStyles.container,
    paddingBottom: 50,
  },
  headerView: {
    marginBottom: 20,
  },
});

export default ContentContainer;
