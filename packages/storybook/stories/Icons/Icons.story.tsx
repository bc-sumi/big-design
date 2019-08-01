import { Flex, H0, H1, Text } from '@bigcommerce/big-design';
import { CheckIcon } from '@bigcommerce/big-design-icons';
import { storiesOf } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Code, CodePreview, CodeSnippet } from '../../components';

import { IconPropTable } from './IconPropTable';

const IconStory: React.FC = () => {
  const [icons, setIcons] = useState<any>({});

  useEffect(() => {
    const fetchIcons = async () => {
      const { createStyledIcon, ...iconsModule } = await import('@bigcommerce/big-design-icons');

      setIcons(iconsModule);
    };

    fetchIcons();
  }, []);

  return (
    <>
      <H0>Icons</H0>

      <Text>
        Icons live in a separate package <Code>@bigcommerce/big-design-icons</Code>. To use the icons you will first
        need to add the package to your app using <Code>npm install @bigcommerce/big-design-icons</Code> or{' '}
        <Code>yarn add @bigcommerce/big-design-icons</Code>.
      </Text>

      <H1>Usage</H1>

      <Text>To use an icon import the component from the package:</Text>

      <CodeSnippet>{`import { CheckIcon } from '@bigcommerce/big-design-icons';`}</CodeSnippet>

      <Text>Use it anywhere in your app:</Text>

      <CodePreview>
        {/* jsx-to-string:start */}
        <CheckIcon color="success" size="xxxLarge" />
        {/* jsx-to-string:end */}
      </CodePreview>

      <H1>API</H1>

      <IconPropTable />

      <H1>Available Icons</H1>

      <Flex wrap="wrap" justifyContent="center">
        {Object.keys(icons).map(iconName => {
          const Icon = icons[iconName];

          return (
            <Flex
              key={iconName}
              style={{ width: '300px' }}
              direction="column"
              borderRadius="normal"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              padding="large"
            >
              <Icon size="xxxLarge" />
              <Code>{`<${iconName} />`}</Code>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

storiesOf('Icons', module).add('Overview', () => <IconStory />);