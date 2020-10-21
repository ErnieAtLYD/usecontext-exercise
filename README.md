# Props, Drilldowns, and Context Exercise

## To install this locally

- [ ] Clone this repository.
- [ ] cd into the project.
- [ ] Type `yarn` to install the necessary packages.
- [ ] Type `yarn start` at the command line to run create-react-app.

## Instructions

1. In the following React App, there are the following components: `<App />`, `<FirstComponent />`, `<SecondComponent />`, `<ThirdComponent />`, and `<ComponentNeedingProps />`.
2. `<App />` has access to a variable named `content` and should render `<SecondComponent />`.
3. `<SecondComponent />` should render `<ThirdComponent />`.
4. `<ThirdComponent />` should render `<ComponentNeedingProps />`.
5. `<ComponentNeedingProps />` takes one prop, named `content`. This component should render the value of `content` from the `<App />` component, wrapped in `<h3></h3>` tags.

### Challenge #1: Using Prop Drilling

#### Setup

- [ ] Create a new branch: git checkout -b `<firstName-lastName>-part1`.
- [ ] Implement the project on your newly created `<firstName-lastName>-part1` branch, committing changes regularly.
- [ ] Push commits: git push -u origin `<firstName-lastName>-part1`.

#### Task

- [ ] Pass the variable in `content` from `<App />` all the way down to `<ComponentNeedingProps />` using **prop drilling**.

#### When you're done

- [ ] Submit a pull request to merge <firstName-lastName>-part1 Branch into main and give your house instructor the URL. **Note:** they'll use this PR to check your work, however they won't merge this into the main branch.

### Challenge #2: Using Component Composition

#### Setup

- [ ] Go back to the main branch: git checkout main
- [ ] Create a new branch: git checkout -b `<firstName-lastName>-part2`.
- [ ] Implement the project on your newly created `<firstName-lastName>-part2` branch, committing changes regularly.
- [ ] Push commits: git push -u origin `<firstName-lastName>-part2`.

#### Task

- [ ] Modify the exercise to use **Component Composition**, rather than using prop drilling.
  - HINT: The idea of Component Composition takes advantage of the `children` prop inside React, which means we should see `{children}` in the JSX of one or more components above.

#### When you're done

- [ ] Submit a pull request to merge <firstName-lastName>-part2 Branch into main and give your house instructor the URL. **Note:** they'll use this PR to check your work, however they won't merge this into the main branch.

### Challenge #3: Using Context

#### Setup

- [ ] Go back to the main branch: git checkout main
- [ ] Create a new branch: git checkout -b `<firstName-lastName>-part3`.
- [ ] Implement the project on your newly created `<firstName-lastName>-part3` branch, committing changes regularly.
- [ ] Push commits: git push -u origin `<firstName-lastName>-part3`.

#### Task

- [ ] Modify the exercise to use React Context for `<ComponentNeedingProps />` to have access to the `content` variable. There are hints throughout the JavaScript.

#### When you're done

- [ ] Submit a pull request to merge <firstName-lastName>-part3 Branch into main and give your house instructor the URL. **Note:** they'll use this PR to check your work, however they won't merge this into the main branch.
