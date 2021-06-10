import Header from 'native/components/Header';
import Body from 'native/typography/Body';
import Subtitle from 'native/typography/Subtitle';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Avatar from '../components/Avatar';
import ProfileScreen from '../components/ProfileScreen';
import * as Yup from 'yup';
import YupValidations from 'common/utility/yupValidations';
import { getFieldKeys } from 'common/utility/form';
import Form from 'native/components/Form';
import LayoutStyles from 'native/layouts/ScreenContainer/styles';
import FieldRow from 'native/components/FieldRow';
import TextInput from 'native/fields/TextInput';
import DateTextInput from 'native/fields/DateTextInput';
import BottomActionBar from 'native/components/BottomActionBar';
import FormSubmitButton from 'native/fields/FormSubmitButton';

const validationSchema = Yup.object({
  firstName: Yup.string().defined(),
  lastName: Yup.string().defined(),
  dob: YupValidations.date().defined(),
  phoneNumber: YupValidations.phone().defined(),
  email: YupValidations.email().defined(),
});

type FormValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  dob: '',
  phoneNumber: '',
  email: '',
};

const formKeys = getFieldKeys(initialValues);

const EditProfile: React.FC = () => {
  return (
    <ProfileScreen>
      <Header title="Edit Information" />
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <ScrollView style={styles.scroll}>
            <Subtitle>Hmmm want to change something ?</Subtitle>
            <Body>
              no worries you can easily manage your details by feeding new
              information
            </Body>
            <Avatar style={{ marginBottom: 20 }} />
            <FieldRow columns={2}>
              <TextInput
                type="name"
                name={formKeys.firstName}
                label="First Name"
              />
              <TextInput
                type="name"
                name={formKeys.lastName}
                label="Last Name"
              />
            </FieldRow>
            <FieldRow columns={1}>
              <DateTextInput name={formKeys.dob} label="Date of Birth" />
              <TextInput
                type="phone"
                name={formKeys.phoneNumber}
                label="Phone"
              />
              <TextInput type="email" name={formKeys.email} label="Email" />
            </FieldRow>
          </ScrollView>
          <BottomActionBar>
            <FormSubmitButton>{'Save & Continue'}</FormSubmitButton>
          </BottomActionBar>
        </View>
      </Form>
    </ProfileScreen>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    ...LayoutStyles.container,
    paddingBottom: 50,
  },
});

export default EditProfile;
