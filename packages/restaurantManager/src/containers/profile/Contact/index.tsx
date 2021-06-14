import React from 'react';
import Header from 'native/components/Header';
import ProfileScreen from '../components/ProfileScreen';
import * as Yup from 'yup';
import { getFieldKeys } from 'common/utility/form';
import Form from 'native/components/Form';
import FieldRow from 'native/components/FieldRow';
import TextInput from 'native/fields/TextInput';
import ContentContainer from '../components/ContentContainer';
import { issueData, IssueType } from './constants';
import SelectInputField from 'native/fields/Select';

const validationSchema = Yup.object({
  issueType: Yup.mixed<IssueType>()
    .oneOf(issueData.map(obj => obj.value))
    .required(),
  desciption: Yup.string().defined(),
});

type FormValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: FormValues = {
  issueType: undefined,
  desciption: '',
};

const formKeys = getFieldKeys(initialValues);

const ContactKitchenFlow: React.FC = () => {
  return (
    <ProfileScreen>
      <Header title="Contact Us" />
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <ContentContainer
          title="Struggling to get something ?"
          description="don’t worry we are here to take care for you, send us you issue and we will get connected"
          submitLabel="Submit"
        >
          <FieldRow columns={1}>
            <SelectInputField
              name={formKeys.issueType}
              label="Select Issue"
              data={issueData}
            />
            <TextInput
              name={formKeys.desciption}
              label="Explain issue in detail"
              type="content"
            />
          </FieldRow>
        </ContentContainer>
      </Form>
    </ProfileScreen>
  );
};

export default ContactKitchenFlow;
