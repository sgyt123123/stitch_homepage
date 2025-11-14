import '@testing-library/jest-dom/vitest'

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
// @ts-expect-error test environment polyfill
global.IntersectionObserver = MockIntersectionObserver
