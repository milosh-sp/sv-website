---
type: "always_apply"
---

[React Project Architecture]
- If the react project usese 'Atomic Design' and 'Feature based Architecture' follow it strictly

[React-Specific Requirements]  
- Scan for already built components and do not build new ones, prioritize re-use  
- Functional components ONLY (no class components)  
- Use `function` syntax instead of `const` for functions
- State management hierarchy:  
  - If a codebase has a state manager, use the state manager
  - Local state → Context API → State management lib (Redux Toolkit ONLY if needed)  
- Strict TypeScript:  
  - Type definitions BEFORE implementation  
  - No `any` type - use generics/unknown + type guards  
  - Strict null checks enabled  
  - Union types over optional props when possible  
  - Use `ComponentProps` instead of HTML props when extending component props
  - Each `type` or `interface` should have it's own type file named `{ComponentName}.types.ts`
- Use react 19.2 with react compiler features, prioritize modern react  
- If codebase is using Nextjs16 prioritize Nextjs16
- When creating types for components, always extend from semantic HTML5 elements 
- Stricly follow React S.O.L.I.D

## SRP (Single Responsibility)

### Definition

Generic: **"A class, module, or function should have only one reason to change,
meaning it should do one thing"**

React: **"A component should have only one reason to change, meaning it should
have only one job"**

Use this when components become large or handle multiple tasks:

- Manage state and render complex UI
- Handle data fetching and error handling
- Contain business logic and presentation

To ensure our components do one thing internally, we can:

- Break large components that do too much into smaller components.
- Extract code unrelated to the main component functionality into separate
  utility functions.
- Encapsulate connected functionality into custom hooks, like business logic and
  (useEffect, handlers, states)

### Example

#### Bad

Single component handles everything and is hard to maintain and test.

```typescript
// IncorrectUserProfile.js
const IncorrectUserProfile = ({ user }) => {
  // Fetching data, handling business logic and displaying all in one
  const handleEdit = () => {
    console.log("Edit user");
  };

  return (
    <div>
      <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={handleEdit}>Edit User</button>
    </div>
  );
};
```

#### Good

Components are split into smaller components that handle different tasks and are
easier to test and maintain.

```typescript
const UserProfile = ({ user }) => {
  return (
    <div>
      <UserAvatar user={user} />
      <UserInfo user={user} />
    </div>
  );
};

// UserAvatar.js
const UserAvatar = ({ user }) => {
  return <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />;
};

// UserInfo.js
const UserInfo = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};
```

## OCP (Open/Closed)

### Definition

General and React: **"Software entities (classes, modules, functions, etc.)
should be open for extension, but closed for modification."**

A component should not change it's implementation because it is CLOSED to
modification, it should only extend it's functionality. And the component should
not break if new functionality is extended.

Use when creating:

- Component libraries
- Base UI elements (buttons, inputs, cards)
- Reusable layout components

The goal of this principle is:

- Make it easier to add new features to a software system without affecting the
  existing functionality.
- This helps to make a software system more maintainable and extensible.
- Reduce the risk of breaking existing functionality.

### Example

#### Bad

```typescript
// IncorrectButton.js
// Modifying the original Button component directly for a specific style
const Button = ({ onClick, children, primary }) => {
  const style = primary
    ? { backgroundColor: "blue", color: "white" }
    : null;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};
```

#### Good

```typescript
// Button.js
const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

// Usage
const PrimaryButton = (props) => {
  const primaryStyle = { backgroundColor: "blue", color: "white" };
  return <Button {...props} style={primaryStyle} />;
};
```

## LSP (Liskov Substitution)

### Definition

General: **Objects of a superclass should be able to be replaced with objects of
a subclass without affecting the correctness of the program**

React: **Sub-components should behave predictably as their parents**

LSP recommends designing objects in such a way that **subtype objects should be
substitutable for supertype objects**.

Critical when creating:

- Component inheritance hierarchies
- Wrapper components
- Design system foundations
- To enable the reuse and composition of components in a flexible and
  maintainable way.
- Set of flexible, interchangeable components that can be easily composed to
  create more complex UI elements.

### Example

#### Bad

CustomButton breaks onClick expectations, so it will not behave as the parent
button(native JSX button).

```typescript
function CustomButton({ onClick }) {
  return <button onClick={onClick ? () => {} : null} />;
}
```

#### Good

Maintains the same button behavior as the native JSX button.

```typescript
function CustomButton({ onClick, ...props }) {
  return <button onClick={onClick} {...props} />;
}
```

## ISP (Interface Segregation)

### Definition

General: "In the field of software engineering, the interface segregation
principle (ISP) states that no code should be forced to depend on methods it
does not use."

React: "Don't force components to depend on unused features"

The interface segregation principle advocates for minimizing dependencies
between the components of the system, making them less coupled and thus more
reusable.

Essential for:

- Shared component APIs
- Container components
- Complex state management
- Improved maintainability: By creating smaller, more focused components, you
  can make it easier to understand and modify the codebase. This can save time
  and effort when making changes to the application.
- Increased flexibility: By minimizing dependencies between components, you can
  make it easier to reuse and refactor components. This can make it easier to
  add new features or make changes to the application.

### Example

#### Bad

The component has a large interface that is not used, should be split into
smaller components.Also props that are not needed should not be in the interface

```typescript
// Implementation
function UserProfile({ showPosts, showFriends, showSettings }) {
  return (
    <div>
      {showPosts && <Posts />}
      {showFriends && <Friends />}
      {showSettings && <Settings />}
    </div>
  );
}

//usage
<UserProfile showPosts showFriends showSettings />;
```

#### Good

Component is split into smaller components, and we do not need to pass props the
component is nt going to be using

```typescript
function User() {
  return (
    <>
      <UserProfile />
      <UserFriends />
      <UserSettings />
    </>
  );
}
```

## DIP (Dependency Inversion)

### Definition

"High-level modules should not depend on low-level modules. Both should depend
on abstractions."

In other words, you can think that a component should not contain dependencies
(external services API call) in itself. and we had to reuse that component from
another place. External services should work in a single way to reduce
dependence on each other making the code clean and easy to use by other
components.

Used for:

- Use hooks or similar patterns to abstract data fetching
- Service integration (API, auth)
- Cross-cutting concerns (logging, analytics)
- Testing (mocking dependencies)
- High-level modules should not depend on low-level modules. Both should depend
  on abstractions.
- Making it easier to test components in isolation, by removing dependencies on
  external services or other components.
- Decoupling components from one another, so that changes to one component don't
  require changes to others.

### Example

#### Good

```typescript
import React from "react";
// Service abstraction
export const DataContext = createContext<ApiService | null>(null);


// High-level component
function App() {
  return (
    <DataContext value={apiService}>
      <UserDashboard />
    </DataContext>
  );
}
```
#### Bad
```typescript
// Low-level consumer
function UserDashboard() {
  const a  const apiService = React.use(DataContext)
  // Modern use() hook in React 19+
  // Uses service without knowing implementation
}
```

[Performance Optimization]  
- Always implement:  
  - Code splitting (React.lazy + Suspense)  
  - Virtualization for lists > 100 items  
  - WASM integration for CPU-heavy tasks  
- Avoid:  
  - Unnecessary useEffect (prefer event handlers), use `useEffectEvent` when something needs to be performed only `onMount`  
  - Unnecessary `useMemo` and `useCallback` because the codebase uses react compiler
  - Prop drilling (use Context selectors)  
  - Large bundle dependencies  
  - Inline object creation in render  

[Code Quality Standards]  
- Instead of using `case` use simple object k:v
- For types add one export on the bottom of the type file if there are two more exports for example `export { func1, funcs }`,
  for component export use `export function Component()`
- ES7+ Features Required:  
  - Async/await over promise chains  
  - Optional chaining (?.) + Nullish coalescing (??)  
  - Object.entries/.values over Object.keys  
  - Array.at() for index access  
- Style Enforcement:  
  - Follow strictly Biome config  
  - Prettier with 2-space indent  
  - 80-character line limits  
  - PascalCase components / camelCase everything else  
- Security:  
  - Sanitize ALL external inputs  
  - CSP-compliant patterns  
  - XSS protection in JSX (auto-escaping enforced)  
  - JWT best practices for auth  
  - Using extern links should have security attributes

[Testing Requirements]
Ask before impelmenting tests if it is necessary  
- Test-Driven Implementation:  
  - Jest + Testing Library for unit tests  
  - Cypress for E2E (critical paths)  
  - 100% branch coverage for core logic  
  - Mock Service Worker for API simulation  
- Test Patterns:  
  - Component snapshot tests (atomic level)  
  - Hook testing with react-hooks-testing-library  
  - TypeScript assertion tests (tsd)  

[Documentation]  
- Minimal In-code Comments:  
  - Complex algorithms: Big-O notation in comments  
  - Performance considerations documented
  - Catches and possible future problems  

[Senior Engineer Patterns]  
- Required Implementations:  
  - Error boundaries with recovery  
  - A11y compliance (WCAG 2.1 AA)  
  - i18n-ready component structure  
  - Dark mode/theme support  
  - Loading states + error UX patterns
  - Make sure styling is mobile responsive as well
  - Write pure functions much as possible since they are easier to test and maintain
- Forbidden Patterns:  
  - Prop spreading without type safety  
  - Nested ternary operators  
  - Magic numbers/strings (use enums/consts)  
  - Any npm dependency without audit check  
  - Coupling logic too much into one file 
  - Adding content directly into a component and not using `strings.ts` file or `i18n` if the codebase has it
  - Use of `use client` everywhere, use only if there is a client interaction


[Final Validation]  
- Pre-commit Hooks:  
  - Type checking  
  - Linting  
  - Dependency circularity check  
  - Bundle size audit  
- Final Output Must:  
  - Pass strict null checks  
  - Have 0 ESLint warnings  
  - Maintain 4:1 ratio (code:test)  
  - Include CI/CD pipeline recommendations
  - Include recommendations to improve code further if determined  
