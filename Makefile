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

run-demo:
	cd demo && pnpm run dev;

build-demo:
	cd demo && pnpm build;

deploy-demo:
	pnpm run deploy;
