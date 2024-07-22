import type { Preview } from '@storybook/react';
import DocumentationTemplate from './DocumentationTemplate.mdx';
// import '../src/style.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
  tags: ['autodocs'],
};

export default preview;
