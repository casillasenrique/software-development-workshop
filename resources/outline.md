# Lunch and Learn/Workshop Outline and Resources

## Philosophies of Software Development
###	Agile
* Archived Manifesto - [Manifesto for Agile Software Development](http://agilemanifesto.org/)
* Digital.ai - [15th State of Agile Report (2021)](https://digital.ai/resource-center/analyst-reports/state-of-agile-report/) 
* Harvard Business Review - [Embracing Agile](https://hbr.org/2016/05/embracing-agile)

## Issue Management

## Development Environments

### IDEs and Code Editors
* [Differences](https://blog.devart.com/difference-between-ide-and-code-editor-explained.html)
  * IDEs provide a full set of tools for development on software projects. For
    much larger and complex projects, an IDE might be more suitable because they
    are more heavy-weight and provide a lot of built in developer support
  * Code editors are more lightweight and primarily support writing code, but
    can be enhanced with plugins and extensions
* Visual Studio Code - [download](https://code.visualstudio.com/)
  * VS Code is by far the most popular code editor in sofware among industry
    professionals and casual developers because of its versatility and massive
    community support
  * According to the [2021 Stack Overflow Developer
    Survey](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-new-collab-tools),
    VS Code ranks as the #1 most popular editor/IDE with over 70% of respondents
    using it 
* JetBrains IDEs - [downloads](https://www.jetbrains.com/products/#type=ide-vs)
  * Note: Some versions require payment or educational license
  * Use PyCharm for Python
  * Use WebStorm for web development (HTML/JS/CSS)
  * Use DataSpell for data science projects (e.g. Jupyter notebook projects)
* If you want to join the cool kids, use [Vim](https://www.vim.org/download.php) 😎
  * Pretty hardcore, but if you manage to learn how to use it, your coding speed
    will increase by 9000%.  
  * You can emulate Vim in VS Code with the [Vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
### Useful VS Code Extensions
* Git Graph - [install](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) 
  * Visualizes the full graph of your working Git tree and commits
  * Facilitates Git commands by providing a user interface
* Git Lens - [install](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 
  * Greatly enhances version control within VS Code by providing in-editor
    features for viewing commits within a project
  * Also makes using Git commands easier to avoid typing commands manually
* Prettier - [install](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  * Auto-formats your code in web development projects (HTML/JS/CSS)
* Live Server - [install](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  * Opens a server on your localhost for any HTML file
  * Automatically refreshes the page when edits are made
* Auto Rename Tag - [install](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  * Automatically edits the matching HTML element tag when you edit one of them
* React Snippets - [install](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  * *Helpful for React/Next.js projects*
  * Automatically create React boilerplate code such as components and hooks
* Color Highlight - [install](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
  * *Optional helpful extension*
  * Highlights any hex color codes within your code in the actual color that it
    represents
* Markdown All in One - [install](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  * *Optional helpful extension*
  * Tools to write and preview markdown files
* Rainbow CSV - [install](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
  * *Optional helpful extension*
  * Adds colors to raw CSV files to make things slightly more readable at first glance
* Rewrap - [install](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap)
  * *Optional helpful extension*
  * Automatically wrap text and comments if they go past a certain amount of
    characters/columns
* TODO Highlight - [install](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
  * *Optional helpful extension*
  * Highlights "TODO"s in your code so they can be easily spotted

### Useful Chrome Extensions
* JSON Formatter - [install](https://chrome.google.com/webstore/detail/json-formatter/gpmodmeblccallcadopbcoeoejepgpnb)
  * Automatically formats JSON content within the browser. Useful for testing
    APIs
* React Developer Tools - [install](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * Incredibly useful tools for inspecting, debugging, and profiling React
    projects during development
* Web Developer - [install](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
  * Helpful features for web development such as deleting cookies and turning
    off styling  
* Colorblindly - [install](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg)
  * Changes the colors on the page to simulate different types of
    colorblindness. Can be helpful to improve website accessibility 
* VS Code - [install](https://chrome.google.com/webstore/detail/vs-code/kobakmhnkfaghloikphojodjebdelppk)
  * Open any public repository on GitHub *within your browser*! 🤯

### Enforcing a Consistent Developer Experience
* While it is not that important that all developers use the same environment,
  it is extremely helpful that there are some standards to maintain consistency
  within your codebase.
* See the [coding principles section](#style-guides-and-docstrings) on examples
  of how software companies use style guides to create this consistency in the
  first place
* Examples of simple ways to enforce consistency and create a nicer developer experience
  * `.prettierrc` files - [documentation](https://prettier.io/docs/en/configuration.html)
    * A `.prettierrc` file in your repository will ensure that your Prettier
      extension settings are consistent across all development environments,
      which will lead to consistent styling
    * Not everyone has to be using VS Code, since Prettier is supported in IntelliJ products like
    WebStorm
    ([documentation](https://www.jetbrains.com/help/webstorm/prettier.html))
    * See the [`.prettierrc` file in this repository](../.prettierrc) for an example!
  * VS Code Workplace `settings.json` Files - [documentation](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)
    * Some teams on tech companies all agree to use VS Code, then set up
      workspace settings in a `settings.json` file to ensure consistent styling,
      tasks, and more
    * See [`.vscode/settings.json`](../.vscode/settings.json) for an example!
  * Turning on "format on save" in your IDE or editor (`editor.formatOnSave` in
    VS Code)
    
## Version Control
### Versioning Software (Semantic Versioning)
* When writing any large application that is released to the public, software
  companies try to always include a version number. Think of the different [iOS
  versions](https://en.wikipedia.org/wiki/IOS_version_history) or [Windows
  versions](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions)
* [Semantic versioning](https://semver.org/spec/v2.0.0.html) (SemVer) is an
  extremely popular convention for versioning software that a lot of software
  teams use
  * Consists of a major, minor, and patch version number (e.g.
    `major.minor.patch = 1.2.1`).
  * See the [official documentation]((https://semver.org/spec/v2.0.0.html) ) for
    rules on when to update each number, but tl;dr update the **patch**
    version whenever you fix a bug, the **minor** version whenever you add a
    feature, and the **major** version whenever you make a
    backwards-incompatible change (e.g. when you completely change how users
    might interact with something)
* Versions usually get updated on new deployments or releases, not on every
  commit (see the [branching models section](#git-branching-models))
* Consider including a version number somewhere in your codebase
  * A simple place is to include it in the [`package.json`
    file](../package.json)
  * Some projects include a top-level file specifically for storing a version
    number variable, like this [`ReactVersion.js`
    file](https://github.com/facebook/react/blob/main/ReactVersions.js).

### Git Branching Models
* The larger a project gets, the more important it is to keep your
  repository/local Git working tree clean
* Software teams accomplish this by agreeing on a Git branching model, which
  splits up different "phases" of your project into different branches.
* A simple branching model includes two types of branches - a **main** branch, and
  **release** branches
  1. All commits during development are made to **main**
  2. When you are ready for a new release,
    create a new **release** branch with the [new version
    number](#versioning-software-semantic-versioning) and deploy that branch
    (e.g. branch `v1.2.3`)
  3. Make any last minute ["hotfixes"](https://en.wikipedia.org/wiki/Hotfix) by
     making commits on the release branch
  4. Lastly, merge the **release** branch back to **main** so the hotfixes are
     applied as developers keep working on new features
* The enhacement to this model, which is probably the most-used method, is
  [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
  * Instead of making commits directly to main, collaborators create pull
    requests for every new feature they want to add
  * Instead of making release branches, each pull request may or may not
    increment the version number and specify a new release (however, release
    branches are still a good practice and are common among software projects)
* A more heavy-weight model,
  [`git-flow`](https://nvie.com/posts/a-successful-git-branching-model/), can be
  useful for larger projects
  * The key feature of this model is that there are *two* main branches,
    **main** and **develop**, as well as three different supporting branches
    that can be created - **feature**, **release**, and **hotfix** 
  * Think of **feature** branches as pull requests which get merged into
    **develop**, which then gets merged to **main** after a release
  
### Some Git Tips/Tricks
* Use `git pull --rebase` instead of `git pull` before trying to push a new
  commit on the main branch
  * This [Medium
    article](https://medium.com/@DGabeau/git-pull-rebase-vs-git-pull-c2b352fe53aa)
    has a nice explanation of what this does and why you might want to use it
  * Avoids unecessary branching on the main branch
* VS Code has [integrated version
  control](https://code.visualstudio.com/docs/sourcecontrol/overview) so in
  theory you never have to write a single command! 😮 (still highly recommend
  learning the commands) 
* Use the [Git Graph](https://www.youtube.com/watch?v=u9ZQpKGTog4) and Git Lens
  extensions within [VS Code](https://www.youtube.com/watch?v=rxKGgSLwOnU)
  (YouTube videos linked)
* If you are a visual learner and want to learn how Git works, check out this
  great [tutorial website](https://learngitbranching.js.org/)
  * Checkout the [sandbox version](https://learngitbranching.js.org/?NODEMO) as well
* Don't use `master` as your primary branch, call it `main` ([Google's suggestions](https://developers.google.com/style/word-list#master)) 


## Coding Best Practices

### Testing
* [Cypress](https://www.cypress.io/ ) - End to End (E2E) Testing Library
  * .

### DRY

### Style Guides and Docstrings
* JavaScript
  * [JSDoc](https://jsdoc.app/) - JavaScript *Docstring* Style Guide
  * [Google JavaScript Style
Guide](https://google.github.io/styleguide/jsguide.html ) - Google's complete
style guide on writing JavaScript code
* Python
  * [PEP 8](https://peps.python.org/pep-0008/
) - Python's official style guide
  * [PEP 257](https://peps.python.org/pep-0257/) - Python's official docstring conventions
  * [Google Python Style
    Guide](https://google.github.io/styleguide/pyguide.html) - Google's enhanced
    complete
    Python style guide
  * [Google Python Style
Example](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html
    ) - Example of Google's style (mainly for docstrings)

### Arrow Code

### Law of Demeter
https://betterprogramming.pub/demeters-law-don-t-talk-to-strangers-87bb4af11694
