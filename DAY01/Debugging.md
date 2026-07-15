# AI Code Review

## Issues Found

1. Email locator was missing.
2. Password locator was missing.
3. Login button state was not validated.
4. Button text may vary.
5. Used page.url() instead of await expect(page).toHaveURL().
6. Missing proper assertions.
7. Locator strategy can be improved using getByRole() or getByLabel().

## Best Practices

- Use Playwright auto-waiting assertions.
- Prefer semantic locators.
- Validate AI-generated code before using it.