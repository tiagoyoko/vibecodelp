```markdown
# vibecodelp Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on contributing to the `vibecodelp` TypeScript codebase. It covers the project's coding conventions, file organization, and testing patterns, ensuring consistency and maintainability. While no specific frameworks or automated workflows are detected, this guide will help you follow the established patterns and practices observed in the repository.

## Coding Conventions

### File Naming
- **CamelCase** is used for file names.
  - Example: `myComponent.ts`, `userProfile.test.ts`

### Import Style
- **Mixed imports** are used, combining both named and default imports as needed.
  - Example:
    ```typescript
    import React from 'react';
    import { useState } from 'react';
    ```

### Export Style
- **Default exports** are preferred.
  - Example:
    ```typescript
    const MyComponent = () => { /* ... */ };
    export default MyComponent;
    ```

### Commit Messages
- **Freeform style** is used, with no strict prefixes.
- **Average length:** ~54 characters.
  - Example:  
    ```
    Add support for new user authentication flow
    ```

## Workflows

### Adding a New Feature
**Trigger:** When implementing a new feature or module  
**Command:** `/add-feature`

1. Create a new TypeScript file using camelCase naming.
2. Write your feature code, using default exports.
3. Import dependencies using mixed import style as needed.
4. Write corresponding test files with the `.test.ts` pattern.
5. Commit your changes with a clear, descriptive message.

### Writing Tests
**Trigger:** When adding or updating functionality  
**Command:** `/write-test`

1. Create a test file named `yourFeature.test.ts`.
2. Write tests using the project's preferred (undetected) testing framework.
3. Ensure tests cover all new or changed logic.
4. Run tests manually to verify correctness.

### Refactoring Code
**Trigger:** When improving or restructuring existing code  
**Command:** `/refactor`

1. Identify the code to refactor.
2. Update the code, maintaining camelCase file naming and default exports.
3. Update imports if file names or locations change.
4. Update or add tests as needed.
5. Commit with a descriptive message about the refactor.

## Testing Patterns

- **Test File Naming:**  
  Test files use the `.test.ts` pattern and are placed alongside or near the code they test.
  - Example: `userProfile.test.ts`
- **Testing Framework:**  
  The specific framework is undetected; follow existing patterns or consult the team.
- **Test Coverage:**  
  Write tests for all new features and significant changes.

## Commands
| Command        | Purpose                                      |
|----------------|----------------------------------------------|
| /add-feature   | Scaffold and implement a new feature/module  |
| /write-test    | Add or update tests for code changes         |
| /refactor      | Refactor existing code following conventions |
```
