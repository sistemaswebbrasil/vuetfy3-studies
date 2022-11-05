<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import TextFieldWithValidation from '@/components/TextFieldWithValidation.vue';

const schema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .label('Password confirmation'),
  terms: yup.boolean().required().oneOf([true], 'You must agree to terms and conditions'),
});

function onSubmit(values) {
  console.log('Submitted with', values);
}
</script>

<template>
  <v-form>
    <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
      <!-- This method uses Higher-order component API to validate vuetify inputs -->
      <Field name="name" v-slot="{ field, errors }">
        <v-text-field v-bind="field" label="Name" :error-messages="errors" />
      </Field>

      <!-- This uses a custom component with the composition API -->
      <TextFieldWithValidation name="email" label="Email" type="email" />

      <!-- This uses a custom component with the composition API -->
      <TextFieldWithValidation name="password" label="Password" type="password" />

      <!-- This uses a custom component with the composition API -->
      <TextFieldWithValidation
        name="passwordConfirm"
        label="Password Confirmation"
        type="password"
      />

      <!-- Same thing for other types of components -->
      <!-- In case of checkboxes you need to explicitly bind the model events -->
      <!-- With composition it is easier since you can use the `v-model` API directly -->
      <Field name="terms" :value="true" type="checkbox" v-slot="{ value, handleChange, errors }">
        <v-checkbox
          :model-value="value"
          @update:modelValue="handleChange"
          label="Do you agree?"
          color="primary"
          :error-messages="errors"
        />
      </Field>

      <v-btn color="primary" class="mr-4" type="submit"> Submit </v-btn>
    </Form>
  </v-form>
</template>
