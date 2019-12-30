This project was bootstrapped with [Create New App](https://docs.expo.io/versions/v36.0.0/get-started/create-a-new-app/).

## Get Started

### Run app
#### To run the app locally:

1.  Make sure you have [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/), and [Yarn](https://yarnpkg.com) installed.

2.  Install your dependencies

    ```
    cd path/to/expo-reminders
    yarn
    ```

3.  Start your app

    ```
    yarn start
    ```

#### Creating a PR

> DON'T USE `git pull` command for updating other changes, you can use `git fetch` and `git rebase` to update changes from `origin`

1. Fetch the origin 
    ```
    $ git fetch origin
    ```
    
2. Rebase to *`origin/dev`* to update changes from others
    ```
    $ git rebase origin/dev
    ```
    
  *If you have conflict , you have to resolve each conflict on each commit , do it manually or add `kdiff3` / `Beyond Compare` or anything that fit you , add these modification and do `$ git rebase --continue` until you cleared the conflicts.*
  
3. Do your work, *make commits*, you should create directly a PR and *push your work frequently*.

4. Test your code.

5. You can now push your code.
  * If the branch is new you just run ```$ git push origin myNewBranch``` 
  * If you had rebase you need to force the ```$ git push origin myNewBranch -f```
  
6. Create the PR from new commits of `origin` into `origin/dev`.



**More you rebase your branch often, less you get problems. So don't wait ! You should rebase each time a commit is added to the origin/dev.**

**DISCLAIMER** : Use *`push -f`* only with **Fork and PR project** like here, never on a project were everyone is working on the **same remote**. Your rewrite commits history.

> DON'T MERGE yourself PR, it should be accomplished by Project Manager or Git Manager after review.

**Do *`Squash and merge`* so that `origin`'s commits history is not messy.**


## Github Workflow

This project uses the git forking workflow, https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow

Write commit messages "in the imperative mood". Read this if you haven't already: http://chris.beams.io/posts/git-commit/

Each commit should do one thing. It's no problem making lots of small commits, it's actualy much better than infrequent large commit because they are easier to review.

We use the Pull Request system of github.

`dev` branch is just our `master` branch.

```