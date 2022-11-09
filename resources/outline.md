# Lunch and Learn/Workshop Outline and Resources

## Philosophies of Software Development

At the highest level, software companies (theoretically 🤔) operate under a set of
guiding principles as they make their products. Check out the list of principles
the biggest tech companies operate under below:
* Amazon's [Leadership Principles](https://www.amazon.jobs/en/principles)
* Google's [Ten things we know to be true](https://about.google/philosophy/)
* Meta's [Six Core Values](https://www.metacareers.com/facebook-life/)
* Netflix [Culture and Valued Behaviors](https://jobs.netflix.com/culture)
###	Agile

[Agile](https://en.wikipedia.org/wiki/Agile_software_development) is a methodology
that provides a set of values and principles with the purpose of delivering
software solutions faster and with greater quality.

* Agile is the most widely adopted development framework in the tech industry;
  see the Digital.ai [15th State of Agile
  Report](https://digital.ai/resource-center/analyst-reports/state-of-agile-report/)
  from 2021
* Check out the [Manifesto for Agile Software
  Development](http://agilemanifesto.org/) that outlines the different
  philosophies held by Agile - 
  * **Individuals and interactions** over processes and tools
  * **Working software** over comprehensive documentation
  * **Customer collaboration** over contract negotiation
  * **Responding to change** over following a plan
* A common comparison is made between Agile and the [Waterfall
  model](https://en.wikipedia.org/wiki/Waterfall_model)
  * In the waterfall model, development moves very rigidly in phases (e.g.
    analysis phase, design phase, development phase, testing phase, deployment
    phase) from start to finish
  * Agile, on the other hand, encourages going through this entire process
    iteratively with support from communication with the customer
* Miscellaneous Articles (note that some terminology might be
  [outdated](https://developers.google.com/style/word-list)):
  * https://hbr.org/2016/05/embracing-agile
  * https://www.nvisia.com/insights/agile-methodology
  * https://www.wrike.com/scrum-guide/scrum-sprints/  
### Scrum
* Most software teams that use Agile adhere to
  [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) or some
  iteration of it, which is an implementation of the Agile methodology
* Scrum's key ideas revolve around constant interation of design, development,
  testing in short (usually) two-week periods called
  **[sprints](https://en.wikipedia.org/wiki/Scrum_sprint)**
* To know what needs to get done, a list of tasks or [issues](#issues-overview)
  are kept in a list known as the **product backlog**
* Below is a simplified list of steps that happen during each sprint 
  1. At the start of a sprint, a **Sprint Planning Meeting** is held where the
     team figures out what they want to accomplish during the sprint (**Sprint
     Goal**), and subsequently move issues from the product backlog into the
     **Sprint Backlog** 
  2. (❗Warning❗, controversial) Daily Scrum or **standup meetings** are short
     daily meetings held in order for the team to stay synchronized
     * The team discusses what they did yesterday, what they are going to do
       today, and whether or not there is anything blocking them from doing
       their work (<15min meeting)
     * There is a lot of growing developer sentiment that daily standups can be
       a waste of time, so a lot of teams opt to hold standups only once or
       twice a week
  3. At the end of the sprint, a **Sprint Review** meeting is held to check what
     did or did not get accomplished

### Dealing with Customers
* Tech companies emphasize and encourage customer collaboration and focus, or at
  least they say they do, since it is a great way to ensure the best products
  are made
* Rule of thumb is to listen to the customer or (potential) users as much as
  possible
* However, be aware of these common pitfalls
  * [Requirements
    Volatility](https://stackoverflow.blog/2020/02/20/requirements-volatility-is-the-core-problem-of-software-engineering/):
    customers can often change the requirements of a project, which is normal,
    but can easily get out of hand. Make sure the team is flexible enough to
    react to these changes in requirements
  * [Feature Creep](https://en.wikipedia.org/wiki/Feature_creep): Customers
    absolutely *love* features, but having too many of them can lead to a
    [bloated](https://en.wikipedia.org/wiki/Software_bloat) project that is
    overcomplicated and difficult to use. This can also distract developers from
    other, more important features. Be sure to think carefully about which
    features are absolutely necessary and which can be put in the backlog 
  * Similarly, be wary of [scope
    creep](https://en.wikipedia.org/wiki/Scope_creep), where the scope or goal
    of the project becomes larger and larger


## Issue Management
Software projects have hundreds, even thousands of features, and many more bugs.
Therefore software companies have come up with several strategies to track all
of these things that need to get done within a project.

### Issues Overview
* Issues are central to managing features and bugs; an issue describes a
  specific feature, bug, task, or concept. Issues are taken from a backlog (see
  the [Scrum section](#scrum) for an example) assigned to developers, and are
  resolved by those developers
* Components of issues:
  * Title - The name of the issue
  * Group - A category this issue might belong in, such as an overarching
    feature name
  * Type - Type of issue (below lists [types that Jira](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/), a popular issue management
    software, uses)
    * Bug - A bug or error that needs to be fixed
    * Epic - An overarching issue that might contain sub-issues, such as a large
      feature that needs to get implemented (e.g. an interactive map)
    * Story - An issue that accomplishes some goal, usually part of an epic
      (e.g. a tooltip that appears on the map)
    * Task - Some other miscellaneous task that needs to be accomplished. This
      type can be used for non-code activities (e.g., research)
  * Assignee - Who is assigned this issue, i.e., who needs to resolve it?
  * Reporter - The person who created this issue; can be the same as the assignee
  * Priority and/or Urgency - How important it is to resolve the issue (e.g.
    low, high, critical)
    * One special priority often talked about in software teams are
      **blockers** - blockers are the highest-priority issues that prevent
      other issues from getting resolved. If a blocker has not been resolved,
      you are "blocking" someone else from resolving their own issues
    * Usually higher-priority issues should be taken care of first
  * Time/Difficulty Estimate
    * Some teams try to include an estimate of how long or how difficult the
      issue is to resolve. This may help in figuring out which issues to
      prioritize and how many issues to assign to each person at a time
    * Note that the number itself doesn't matter, it is just an ordinal value
  * Issue ID - Some autogenerated issue ID. This doesn't matter too much but
    you'll sometimes see it depending on what issue management tool you use

### Kanban Boards
* [Kanban Boards](https://en.wikipedia.org/wiki/Kanban_board) are an extremely
  popular tool used to track issues during the development of a project
    * Issues are displayed graphically as cards or stickers on a board with
      several columns, representing different states the issue can be (e.g. not
      started, in progress, and done/resolved)
    * As developers get assigned issues and work on them, they move them from
      column to column on the board until the issue is resolved. 
    * Under Agile/Scrum, a set of issues is chosen to be put on the board during
      the sprint planning meeting. The issues are assigned to different team
      members, and the goal is to move all of the issues into the "done" column
      by the end of the sprint
* Providers
  * A huge number of tech companies use
    [Jira](https://www.atlassian.com/software/jira), managed by Atlassian;
    over 65,000 companies [according to
    them](https://www.atlassian.com/software/jira/guides/use-cases/who-uses-jira#companies-and-teams-that-use-jira).
    This software might be overkill for fewer smaller projects
  * [Miro](https://miro.com/) provides a [Kanban board
    feature](https://miro.com/kanban/)
  * [Notion](https://www.notion.so/product) provides a [Kanban board
    feature](https://www.notion.so/help/boards)\
  * *[Blog](https://clickup.com/blog/free-kanban-software/) showing other options*

### Documenting Bugs
* When creating bug issues, make sure to document the steps required to
  reproduce that bug to the best of your ability
  * If developers can't reproduce your bug, it is virtually impossible to fix it
  * In larger software teams, there may be hundreds of bugs being reported each
  week, many of them being duplicates; given this, developers may often not look
  at your bugs if they lacked sufficient documentation
* Include clear list of steps, including any relevant development environment
  details if you have a specific configuration you are using
* Include as much supporting media as possible
  * "Logs" can be incredibly useful; these range from the error messages you
    might get, stacktraces, or any print statements or console logs
  * For web development, actual screenshots of the bugs within the website can
    be very useful

## Development Environments

### IDEs and Code Editors
* [Differences between editors and
  IDEs](https://blog.devart.com/difference-between-ide-and-code-editor-explained.html)
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
  * Use [PyCharm](https://www.jetbrains.com/pycharm/) for Python
  * Use [WebStorm](https://www.jetbrains.com/webstorm/) for web development (HTML/JS/CSS)
  * Use [DataSpell](https://www.jetbrains.com/dataspell/) for data science
    projects (e.g. Jupyter notebook projects)
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

### Style Guides and Docstrings
Once you are ready to start coding, one of the first things you usually ask in a
software dev team is what coding style guide and conventions they use. It is
incredibly important to have a consistent style guide so that different parts of
the code are all formatted in the same way and are easy to read.

For example, compare [`format1.js`](../resources/format1.js) with
[`format2.js`](../resources/format2.js) in the `resources` folder. These two
files accomplish the same thing, but they may look very different to different
developers. 
* MDN Web Development Style Guides
  * MDN provides a set of style guides found [here](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
  * Describes coding style for HTML, CSS, and JavaScript
* Prettier (HTML/CSS/JavaScript "style guide")
  * [Prettier](https://prettier.io/) is a style guide on its own since it
    formats your code in specific ways. See the note on Prettier in the
    [consistency section](#enforcing-a-consistent-developer-experience) to see
    how this is accomplished
* JavaScript Style Guides
  * [MDN Official
    Guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
  * [JSDoc](https://jsdoc.app/) - JavaScript *Docstring* Style Guide
  * [Google JavaScript Style
Guide](https://google.github.io/styleguide/jsguide.html ) - Google's complete
style guide on writing JavaScript code
* Python Style Guides
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
### Testing
* For really large projects with clear feature requirements, writing automated
  tests can be extremely helpful
  * Most software development teams make sure that they are constantly testing
    their code
  * Each time a new feature is added or a bug is fixed, new tests are written,
    and sometimes teams might require test result data in all commit messages
* Some teams embrace [Test Driven
  Development](https://en.wikipedia.org/wiki/Test-driven_development), which is
  a process in which tests for a feature are written *before* the actual feature
  is implemented 
* Know the difference between unit
  tests and integration/end-to-end
  tests
  * [Unit tests](https://en.wikipedia.org/wiki/Unit_testing) test individual
    functions and components
  * [Integration tests](https://en.wikipedia.org/wiki/Integration_testing) (or
    E2E) test the individual components as a group, typically testing actual (or
    simulated) interactions performed by users 
* Popular testing libraries
  * [Jest](https://jestjs.io/) - Unit test library for web development (built into [CRA](https://create-react-app.dev/) apps) 
  * [Cypress](https://www.cypress.io/) - End to End (E2E) Web Development
    Testing Library 
  * [Pytest](https://docs.pytest.org/) - Most popular testing library for Python developers 

### Don't Repeat Yourself (DRY)
[DRY code](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is a term you
will hear a lot when working in a software company. The basic idea is that you
want your codebase to be as small and efficient as possible, so you try to not
be reusing code by copying it in many places.

* Write code that is used many times and/or in different places in a function or
  method, then just call that function at the different times and locations
  within your code
* Create
  [abstractions](https://en.wikipedia.org/wiki/Abstraction_(computer_science)):
  put simply, create an easily accessible frameworks so that you don't have to
  understand every single detail of how something works in your code
  * See [here](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction)
    for an example definition in the web development context
  * For example, [D3](https://d3js.org/) is an abstraction; you use D3's cool
    tools to create SVGs, but you don't know and don't have to care about how it
    actually creates displays those SVGs
* Use composition for React components - React has a [nice
  page](https://reactjs.org/docs/composition-vs-inheritance.html) explaining how
  to do this
* Keep the [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) in mind
  * Avoid passing in entire objects as arguments to functions if only a couple
    of that object's properties will be used. Be as specific as possible
  * Of course, does not always apply, so use common sense 
  * [Medium
    article](https://betterprogramming.pub/demeters-law-don-t-talk-to-strangers-87bb4af11694)
    on this topic
  * See the javascript file [here](../resources/lawOfDemeterExample.js) for an
    example of this in action
### Arrow Code
