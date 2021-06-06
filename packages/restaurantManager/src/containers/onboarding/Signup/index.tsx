import React from 'react';
import { ScrollView, View } from 'react-native';
import ScreenContainer from 'native/layouts/ScreenContainer';
import HeadingBox from '../components/HeadingBox';
import { Avatar } from 'react-native-paper';
import Form from 'native/components/Form';
import TextInput from 'native/fields/TextInput';
import * as _ from 'lodash';
import * as Yup from 'yup';
import { getFieldKeys } from 'common/utility/form';
import { onboardingContainerStyle } from '../components/OnboardingScreen';
import DateTextInput from 'native/fields/DateTextInput';
import {
  genderData,
  Gender,
  teamRoleData,
  TeamRoleType,
  BackOfHouseType,
  backOfHouseData,
} from './constants';
import RadioInput from 'native/fields/RadioInput';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import FieldRow from 'native/components/FieldRow';
import SelectInputField from 'native/fields/Select';
import BottomActionBar from 'native/components/BottomActionBar';
import YupValidations from 'common/utility/yupValidations';

const validationSchema = Yup.object({
  firstName: Yup.string().defined(),
  lastName: Yup.string().defined(),
  dob: YupValidations.date().defined(),
  gender: Yup.mixed<Gender>().oneOf(genderData.map(obj => obj.value)),
  teamRoleType: Yup.mixed<TeamRoleType>().oneOf(
    teamRoleData.map(obj => obj.value),
  ),
  backOfHouse: Yup.mixed<BackOfHouseType>()
    .oneOf(backOfHouseData.map(obj => obj.value))
    .when('teamRoleType', {
      is: 'BACK_OF_HOUSE' as TeamRoleType,
      then: Yup.mixed<BackOfHouseType>()
        .oneOf(backOfHouseData.map(obj => obj.value))
        .required(),
    }),
});

type SignupValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: SignupValues = {
  firstName: '',
  lastName: '',
  dob: '',
  gender: 'm',
  teamRoleType: 'FRONT_OF_HOUSE',
  backOfHouse: undefined,
};

const formKeys = getFieldKeys(initialValues);

const Signup: React.FC = () => {
  return (
    <ScreenContainer>
      <Form<SignupValues>
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={value => {
          console.log(value);
        }}
      >
        {({ values }) => (
          <>
            <ScrollView
              // style={{ flex: 1 }}
              contentContainerStyle={{
                flexGrow: 1,
                ...onboardingContainerStyle,
                paddingBottom: 50,
              }}
            >
              <HeadingBox
                flex={2.5}
                title="One Last Step"
                subTitle="Let us know about you"
                description="quickly fill up the form to get us your information for better work flow."
              />

              <View style={{ flex: 7.5 }}>
                <Avatar.Text
                  style={{ alignSelf: 'center', marginBottom: 10 }}
                  size={80}
                  label=""
                />

                <View>
                  <FieldRow columns={2}>
                    <TextInput name={formKeys.firstName} label="First Name" />
                    <TextInput name={formKeys.lastName} label="Last Name" />
                    <DateTextInput name={formKeys.dob} label="Date of Birth" />
                    <RadioInput
                      data={genderData}
                      name={formKeys.gender}
                      label="Gender"
                    />
                  </FieldRow>
                  <FieldRow>
                    <RadioInput
                      data={teamRoleData}
                      name={formKeys.teamRoleType}
                      label="Team Roles"
                    />

                    <TextInput name={formKeys.lastName} label="Last Name" />

                    {values.teamRoleType === 'BACK_OF_HOUSE' && (
                      <SelectInputField
                        label="Back of house"
                        data={backOfHouseData}
                        name={formKeys.backOfHouse}
                        description="choose your prefered role"
                      />
                    )}
                  </FieldRow>
                </View>
              </View>
            </ScrollView>
            <BottomActionBar>
              <FormSubmitButton>Save & Continue</FormSubmitButton>
            </BottomActionBar>
          </>
        )}
      </Form>
    </ScreenContainer>
  );
};

export default Signup;
