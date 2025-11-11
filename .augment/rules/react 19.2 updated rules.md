---
type: "always_apply"
---

[General Principles]
1. Apply STRICT SOLID principles with React-specific implementations:
   - Single Responsibility: 
     * Components do ONE thing (UI/rendering OR logic)
     * Split container/presentational components
     * Hooks for business logic separation
     * Components need to be atomic, and each component needs to have a seperate file
   
   - Open/Closed:
     * Use composition (Component-as-Props pattern)
     * Extend via props/config objects
   
   - Liskov Substitution:
     * Consistent component interfaces
     * Type-safe inheritance where applicable
     * Polymorphic components via `as` prop pattern
   
   - Interface Segregation:
     * Minimal component props interfaces
     * Split large prop types into feature-specific interfaces
     * Discourage "god component" patterns
   
   - Dependency Inversion:
     * Context API for cross-cutting concerns
     * Dependency injection via custom hooks
     * Abstract implementations with TypeScript interfaces

[React-Specific Requirements]
1. Scan for already built components and do not build new ones, prioritize re-use
2. Functional components ONLY (no class components)
3. State management hierarchy:
   - Local state → Context API → State management lib (Redux Toolkit ONLY if needed)
4. Strict TypeScript:
   - Type definitions BEFORE implementation
   - No `any` type - use generics/unknown + type guards
   - Strict null checks enabled
   - Union types over optional props when possible
5. Use react 19.2 with react compiler features, prioritize modern react
6. When creating types for components, always extend from semantic HTML5 elements

[Performance Optimization]
5 Always implement:
   - Code splitting (React.lazy + Suspense)
   - Virtualization for lists > 100 items
   - WASM integration for CPU-heavy tasks
6. Avoid:
   - Unnecessary useEffect (prefer event handlers), use useEffectEvent when something need to be performed only `onMount`
   - Prop drilling (use Context selectors)
   - Large bundle dependencies
   - Inline object creation in render

[Code Quality Standards]
7. ES7+ Features Required:
   - Async/await over promise chains
   - Optional chaining (?.) + Nullish coalescing (??)
   - Object.entries/.values over Object.keys
   - Array.at() for index access
8. Style Enforcement:
   - Biome config
   - Prettier with 2-space indent
   - 80-character line limits
   - PascalCase components / camelCase everything else
9. Security:
    - Sanitize ALL external inputs
    - CSP-compliant patterns
    - XSS protection in JSX (auto-escaping enforced)
    - JWT best practices for auth

[Testing Requirements]
10. Test-Driven Implementation:
    - Jest + Testing Library for unit tests
    - Cypress for E2E (critical paths)
    - 100% branch coverage for core logic
    - Mock Service Worker for API simulation
11. Test Patterns:
    - Component snapshot tests (atomic level)
    - Hook testing with react-hooks-testing-library
    - TypeScript assertion tests (tsd)

[Documentation]
12. In-code Comments:
    - Complex algorithms: Big-O notation in comments
    - Performance considerations documented

[Senior Engineer Patterns]
14. Required Implementations:
    - Error boundaries with recovery
    - A11y compliance (WCAG 2.1 AA)
    - i18n-ready component structure
    - Dark mode/theme support
    - Loading states + error UX patterns
15 Forbidden Patterns:
    - Prop spreading without type safety
    - Nested ternary operators
    - Magic numbers/strings (use enums/consts)
    - Any npm dependency without audit check
    - Coupling logic too much into one file

[Final Validation]
16. Pre-commit Hooks:
    - Type checking
    - Linting
    - Dependency circularity check
    - Bundle size audit
17. Final Output Must:
    - Pass strict null checks
    - Have 0 ESLint warnings
    - Maintain 4:1 ratio (code:test)
    - Include CI/CD pipeline recommendations