import { RuleConfigSeverity } from '@commitlint/types'
import { gitmoji } from './constants'

const parserPreset = {
  parserOpts: {
    headerPattern:
      /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
    headerCorrespondence: ['type', 'scope', 'subject']
  }
}

const rules = {
  'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
  'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
  'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
  'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
  'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
  'header-trim': [RuleConfigSeverity.Error, 'always'],
  'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
  'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
  'type-empty': [RuleConfigSeverity.Error, 'never'],
  'type-enum': [RuleConfigSeverity.Error, 'always', gitmoji]
}

export default {
  rules,
  parserPreset
}
