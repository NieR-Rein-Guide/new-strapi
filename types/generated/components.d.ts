import type { Schema, Attribute } from '@strapi/strapi';

export interface QaQA extends Schema.Component {
  collectionName: 'components_qa_q_as';
  info: {
    displayName: 'Q/A';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Question?'>;
    answer: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'qa.q-a': QaQA;
    }
  }
}
