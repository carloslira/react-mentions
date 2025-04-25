build:
	pnpm install; \
	pnpm build;

publish: build
	pnpm publish --access public;

lint:
	pnpm lint;

lint-fix:
	pnpm lint --fix;

lint-staged:
	pnpm lint-staged;

storybook:
	pnpm storybook;

build-storybook:
	pnpm build-storybook;

deploy:
	pnpm run deploy;
