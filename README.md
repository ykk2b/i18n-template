# Next.js i18n Template

Next.js internationalization template.

## Getting started

```sh
npx create-next-app --example https://github.com/yaviskokakola/i18n-template
```

## adding new languages

To add a new language or edit the already existing one, follow these steps:

1. add language locale to the `i18n-config.ts`
2. create `/dictionaries/{your_language_locale}.json` (for example: `en.json`) with your dictionaries inside
3. add your language in the `get-dictionaries.ts`
4. update switcher logic (or write a new one) in the `/app/[lang]/components/Switcher.tsx`
