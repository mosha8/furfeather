import commitlintConfig from '@commitlint/config-conventional';
import type { UserConfig } from '@commitlint/types';
const commitlintRules = commitlintConfig.rules;
const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...commitlintRules,
    'type-enum': [2, 'always', commitlintRules['type-enum'][2]],
  },
};

export default config;
